#@title Import libraries (Run this cell to execute required code) {display-mode: "form"}
import sys
import json
import cohere
import numpy as np
import re
import pandas as pd
from tqdm import tqdm
from datasets import load_dataset
import umap
import altair as alt
from sklearn.metrics.pairwise import cosine_similarity
from pdf2image import convert_from_path
from annoy import AnnoyIndex

from cvt_pdf_to_img import get_pdf_first_img

import warnings
warnings.filterwarnings('ignore')
pd.set_option('display.max_colwidth', None)

# job_disc = "Neep a person good in ML and Python, It will be good to have web development skills"


#this function takes the demand discription and gives 10 best resume
def sort_resume(job_disc):

    # Paste your API key here. Remember to not share publicly
    api_key = '5EHSqcowINTyCK2uCkun3jj68NH6X63Z0z711JHb'

    # Create and retrieve a Cohere API key from os.cohere.ai
    co = cohere.Client(api_key)

    # Get dataset
    df = pd.read_csv(r"data\resume_data.csv")
    # Preview the data to ensure it has loaded correctly
    df.head()

    # Get the embeddings




    new_df = pd.DataFrame({"pdf_path": [""], "id":[0], "text":job_disc})

    df = pd.concat([new_df, df])



    embeds = co.embed(texts=list(df['text']),
                  model="large",
                  truncate="LEFT").embeddings


    # Check the dimensions of the embeddings
    embeds = np.array(embeds)
    embeds.shape

    # Create the search index, pass the size of embedding
    search_index = AnnoyIndex(embeds.shape[1], 'angular')
    # Add all the vectors to the search index
    for i in range(len(embeds)):
        search_index.add_item(i, embeds[i])

    search_index.build(10) # 10 trees
#     search_index.save('test.ann')

    # Choose an example (we'll retrieve others similar to it)
    example_id = 0
    
    # Retrieve nearest neighbors
    similar_item_ids = search_index.get_nns_by_item(example_id,10,
                                                    include_distances=True)
    # Format and print the text and distances
    results = pd.DataFrame(data={'texts': df.iloc[similar_item_ids[0]]['text'], 
                             'distance': similar_item_ids[1]}).drop(example_id)

    print(f"Question:'{df.iloc[example_id]['text']}'\nNearest neighbors:")
    results


    sel_pdf_paths = list(df.iloc[results.index+1, :].pdf_path)
    sel_pdf_ids = list(df.iloc[results.index+1, :].id)
    score_list = list(results.distance)

    # names_list = [i.split(" ")[0] for i in df.iloc[results.index+1, :].text]
    # names_list

    ##############################################################
    # Capturing image of the first page of the pdf
    images_path = get_pdf_first_img(sel_pdf_paths, sel_pdf_ids)


    # res_df = pd.DataFrame({"pdf_path":sel_pdf_paths, "image_path":images_path, "distance":score_list})
    # res_df.to_json("gen_data.json")

    res_dict = [{"pdf_path":i, "image_path":j, "distance":k} for i, j, k in zip(sel_pdf_paths, images_path, score_list)]


    out_file = open("gen_data.json", "w")
    json.dump(res_dict, out_file)

    # print(res_dict)



if __name__ == "__main__":
    dataToSendBack = sort_resume(sys.argv[1])
    
    print("gen_data.json")
    sys.stdout.flush()
#This file reads pdfs in a folder, read their texts
#creates a table which is saved in data/resume_data.csv


# importing required modules
import os
import PyPDF2
import pandas as pd

data_path = r"data"

#####################

#Initializing the cols
pdf_path, pdf_id, pdf_text = [], [], []

for pdf_name in os.listdir(data_path):
    print(f"Reading data from: {pdf_name}")
    temp_path = os.path.join(data_path, pdf_name)

    pdf_path.append(temp_path)
    # creating a pdf file object
    pdfFileObj = open(temp_path, 'rb')
   
    # creating a pdf reader object
    pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
   
    # printing number of pages in pdf file
    # print(pdfReader.numPages)
   
    # creating a page object
    pageObj = pdfReader.getPage(0)
   
    # extracting text and idfrom page
    pdf_text.append(pageObj.extractText())
    pdf_id.append(pdf_name.split(".")[0])


    # closing the pdf file object
    pdfFileObj.close()

#creating the dataframe and saving the data
df = pd.DataFrame({"pdf_path":pdf_path, "id":pdf_id, "text":pdf_text})

df.to_csv("data/resume_data.csv", index=False)
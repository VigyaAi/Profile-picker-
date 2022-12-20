# import module
from pdf2image import convert_from_path
import os
import shutil

def get_pdf_first_img(all_pdfs, pdf_ids):

  try:
    os.mkdir(r'data\res_imgs')
  except:
    shutil.rmtree(r'data\res_imgs')
    os.mkdir(r'data\res_imgs')


  images_path = []
  for pdf_path, p_id in zip(all_pdfs, pdf_ids):
    # p_path = os.path.join(pdfs_path, pdf_path)

    
    images = convert_from_path(pdf_path)
 
    for i in range(len(images)):
      img_path = f'data\\res_imgs\\{str(p_id)}.jpg'
      images[i].save(img_path, 'JPEG')
      images_path.append(img_path)
      break
    

  return images_path

  

if __name__ == "main":
  pdfs_path = r"data\pdf_data"
  get_pdf_first_img(os.listdir(pdfs_path))
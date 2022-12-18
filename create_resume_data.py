# importing required modules
import os
import PyPDF2
import pandas as pd

data_path = r"resume_archive\pdf"


for pdf_name in os.listdir(data_path):

    pdf_path = os.path.join(data_path, pdf_name)

   
    # creating a pdf file object
    pdfFileObj = open(pdf_path, 'rb')
   
    # creating a pdf reader object
    pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
   
    # printing number of pages in pdf file
    print(pdfReader.numPages)
   
    # creating a page object
    pageObj = pdfReader.getPage(0)
   
    # extracting text from page
    print(pageObj.extractText())
   
    # closing the pdf file object
    pdfFileObj.close()

    break
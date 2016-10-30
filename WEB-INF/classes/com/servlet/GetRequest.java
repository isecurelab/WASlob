package com.servlet;

import java.io.*;
import java.net.*;

public class GetRequest {

   public String getHTML(String urlToRead) {
      URL url;
      HttpURLConnection conn;
      BufferedReader rd;
      String line;
      String result = "";
      try {
         url = new URL(urlToRead);
         conn = (HttpURLConnection) url.openConnection();
         conn.setRequestMethod("GET");
         rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
         while ((line = rd.readLine()) != null) {
            result += line;
         }
         rd.close();
    
      } catch (Exception e) {
    	  result="false";
         e.printStackTrace();
      }
System.out.println(result);
      return result;
   }

   public static void main(String args[])
   {
	   GetRequest c = new GetRequest();
     System.out.println(c.getHTML("https://www.slideshare.net/api/2/search_slideshows?q=ontology&api_key=4w4sRJ4G&ts=1415918696&hash=d8b93463481dec4bd1cb48284136fb7519c63b2e"));
   }
}
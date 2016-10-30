package com.servlet;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.Properties;
import java.util.ResourceBundle;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class WSOntologyCall
 */
@WebServlet("/WSOntologyCall")
public class WSOntologyCall extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public WSOntologyCall() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		// TODO Auto-generated method stub
		
		/*try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*/
		GetRequest c = new GetRequest();
		
		 PrintWriter out = response.getWriter(  ); 
 	    response.setContentType("text/html"); 
		String searchType=request.getParameter("searchType");
		String searchFor=request.getParameter("searchFor");
	
		String VedURL=request.getParameter("VedURL");
		String StudentId=request.getParameter("StudentId");
		
		
		ResourceBundle rb1=ResourceBundle.getBundle("Environment");
        String environment = rb1.getString("ActiveEnvironment");
        
        ResourceBundle rb2=ResourceBundle.getBundle(environment+"_Config");
        
		
		if(searchType.equals("Json")){
			
		      
	        String classes= rb2.getString("Classes");
			out.println(classes); 
			
		}else{
			
			if(searchType.equals("VideoPin") || searchType.equals("VideoUnPin")){
				String url= rb2.getString(searchType);

				out.println(c.getHTML(url+searchFor+"/"+StudentId+"/"+VedURL));
			}else{
				
				String url= rb2.getString(searchType);
	
		        out.println(c.getHTML(url+searchFor)); 
			}
			
	       
	        

	    
		}
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		// TODO Auto-generated method stub
	}

}

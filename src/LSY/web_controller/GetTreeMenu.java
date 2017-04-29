package LSY.web_controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import LSY.utils.WebUtils;

@WebServlet("/GetTreeMenu")
public class GetTreeMenu extends HttpServlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json");
	    response.setCharacterEncoding("UTF-8");
		PrintWriter out=response.getWriter();
		String tree=WebUtils.GetTreeMenu();
		out.println(tree);
		out.flush();		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
/*
 •id: node id, which is important to load remote data
•text: node text to show
•state: node state, 'open' or 'closed', default is 'open'. When set to 'closed', the node have children nodes and will load them from remote site
•checked: Indicate whether the node is checked selected.
•attributes: custom attributes can be added to a node
•children: an array nodes defines some children nodes

[{
2.    "id":1,
3.    "text":"Folder1",
4.    "iconCls":"icon-save",
5.    "children":[{
6.        "text":"File1",
7.        "checked":true
8.    },{
9.        "text":"Books",
10.        "state":"open",
11.        "attributes":{
12.            "url":"/demo/book/abc",
13.            "price":100
14.        },
15.        "children":[{
16.            "text":"PhotoShop",
17.            "checked":true
18.        },{
19.            "id": 8,
20.            "text":"Sub Bookds",
21.            "state":"closed"
22.        }]
23.    }]
24.},{
25.    "text":"Languages",
26.    "state":"closed",
27.    "children":[{
28.        "text":"Java"
29.    },{
30.        "text":"C#"
31.    }]
32.}]
*/

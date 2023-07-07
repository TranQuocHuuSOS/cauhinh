import React from 'react';									
import Login from './../src/component/layout_page/Login';									
import AllProduct from './../src/component/layout_page/AllProduct';									
import ProductList from './../src/component/layout_page/ProductList';									
import ProductDetail from './../src/component/layout_page/ProductDetail';									
import Add from './component/layout_page/add';									
import Contact from './../src/component/layout_page/Contact';									
import ContactList from './../src/component/layout_page/ContactList';									
import Confirm from './../src/component/layout_page/Confirm';									
import Introduce from './../src/component/layout_page/Introduce';									
import SanPhamMoi from './../src/component/layout_page/SanPhamMoi';									
import SanPhamHot from './component/layout_page/SanphamHot';									
import SanPhamKhuyenMai from './../src/component/layout_page/SanPhamKhuyenMai';									
import ProDetailAdmin from './../src/component/layout_page/ProDetailAdmin';									
import NotFound from './../src/component/layout_page/NotFound';									
import ContactDetail from './../src/component/layout_page/ContactDetail';									
									
const routes = [									
	{								
		path : '/',							
		exact : true,							
		main : ()=> <AllProduct />							
	},								
	{								
		path : '/login',							
		exact : true,							
		main : ({history})=> <Login history={history} />							
	},								
	{								
		path : '/product-list',							
		exact : true,							
		main : ()=> <ProductList />							
	},								
	{								
		path : '/contact-list',							
		exact : true,							
		main : ()=> <ContactList />							
	},								
	{								
		path : '/contacts/:id/contactdetail',							
		exact : true,							
		main : ({match})=> <ContactDetail match ={match}/>							
	},								
	{								
		path : '/products/:id/productdetail',							
		exact : true,							
		main : ({match})=> <ProductDetail  match ={match}/>							
	},								
	{								
		path : '/add',							
		exact : true,							
		main : ({history})=> <Add history={history} />							
	},								
	{								
		path : '/products/:id/edit',							
		exact : true,							
		main : ({match , history})=> <Add  match ={match} history={history}/>							
	},								
	{								
		path : '/contacts/:id/confirm',							
		exact : true,							
		main : ({match , history})=> <Confirm  match ={match} history={history}/>							
	},								
	{								
		path : '/contact',							
		exact : true,							
		main : ()=> <Contact />							
	},								
	{								
		path : '/introduce',							
		exact : true,							
		main : ()=> <Introduce />							
	},								
	{								
		path : '/sanphamhot',							
		exact : true,							
		main : ({match})=> <SanPhamHot match ={match}/>							
	},								
	{								
		path : '/sanphamkhuyenmai',							
		exact : true,							
		main : ({match})=> <SanPhamKhuyenMai match ={match}/>							
	},								
	{								
		path : '/sanphammoi',							
		exact : true,							
		main : ({match})=> <SanPhamMoi match ={match}/>							
	},								
	{								
		path : '/products/:id/prodetailadmin',							
		exact : true,							
		main : ({match})=> <ProDetailAdmin match ={match}/>							
	},								
	{								
		path : '',							
		exact : false,							
		main : ()=> <NotFound />							
	}								
];									
									
									
export default routes;									
									
									
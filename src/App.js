import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate, redirect } from 'react-router-dom'
import { MainContext } from './Contexts/MainContext';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import { useEffect, useState } from 'react';
import Success from './Components/models/success';
import LoginAdmin from './Components/admin/login'

import Header from './Components/Header/Header';
import MainModal from './Components/admin/models/mainModal'
import Categories from './Components/admin/Categories';
import Admin from './Components/admin/Admin';
import SubCategories from './Components/admin/SubCategories';
import ProductsAdmin from './Components/admin/ProductsAdmin';
import AddCategory from './Components/admin/models/AddCategory'
import AddSubCategory from './Components/admin/models/AddSubCategory'
import AddProduct from './Components/admin/models/AddProduct'
import Loader from './Components/Loader';
import axios from 'axios'
import Home from './Components/landing/Home';
function App() {
  let navigate = useNavigate()
  let [successModel, setSuccessModel] = useState(true)
  let [path, setPath] = useState('')
  const [open, setOpen] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [allSubCategories, setAllSubCategories] = useState([]);
  let [user, setUser] = useState({})
  let [login, setLogin] = useState(false)
  let [alertMessage, setAlertMessage] = useState({ msg: '', color: true })
  const GetAllCategories = async () => {
    let resp = await axios.get('http://localhost:8080/api/v1/admin/categories')
    if (resp.data.success) {
      setAllCategories(resp.data.categories)
    }

  }
  const GetAllSubCategories = async () => {
    let resp = await axios.get('http://localhost:8080/api/v1/admin/subcategories')
    if (resp.data.success) {
      setAllSubCategories(resp.data.subCategories)
    }

  }
  useEffect(() => {
    setTimeout(() => {
      setOpen(false)
    }, 2000)
  })
  let [isAdmin, setIsAdmin] = useState(false)
  useEffect(() => {
    let User = JSON.parse(localStorage.getItem('user'))
    let Login = JSON.parse(localStorage.getItem('userLogin'))
    if (User) setUser(User)
    if (Login) setLogin(Login)

    setPath(window.location.pathname)
    let isAdminVar = {}
    if (localStorage.getItem('admin')) {
      isAdminVar = JSON.parse(localStorage.getItem('admin')).isAdmin
    }
    setIsAdmin(isAdminVar)
    GetAllCategories()
    GetAllSubCategories()
  }, [open])



  const LogOutHandler = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('userLogin')
    setOpen(true)
    setAlertMessage({ msg: 'log out successfully', color: true })
    setUser({})
    setLogin(false)
    navigate('/login')
  }
  return (
    <>
      {
        // loader ? <Loader /> : ''
      }
      <MainContext.Provider value={{ open, LogOutHandler, login, user, navigate, alertMessage, allSubCategories, allCategories, setAllCategories, GetAllCategories, setAlertMessage, setOpen }}>

        <Success />
        {
          path.includes("admin") ? <div>
            <Routes>
              <Route path='admin' element={<Admin />} >
                <Route path='adminmodel' element={<MainModal />}>
                  <Route path='category' element={<AddCategory />} />
                  <Route path='subcategory' element={<AddSubCategory />} />
                  <Route path='product' element={<AddProduct />} />
                </Route>
                <Route path='category' element={<Categories />} />
                <Route path='subcategory' element={<SubCategories />} />
                <Route path='products' element={<ProductsAdmin />} />
              </Route>
              {/* <Route path='admin' element={<LoginAdmin />} /> */}

            </Routes>

          </div> :
            <div>
              <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
              </Routes>
            </div>}
      </MainContext.Provider>
    </>
  );
}

export default App;

import { APIClient } from "./api_helper";

import * as url from "./url_helper";

const api = new APIClient();

// Gets the logged in user data from local session
// export const getLoggedInUser = () => {
//   const user = localStorage.getItem("user");
//   if (user) return JSON.parse(user);
//   return null;
// };
export const getLoggedInUser =() => api.create(url.JWT_LOGIN_URL);


// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
export const postFakeRegister = (data) =>
  api.create(url.POST_FAKE_REGISTER, data);

// Login Method
export const postFakeLogin = (data) => api.create(url.POST_FAKE_LOGIN, data);

// postForgetPwd
export const postFakeForgetPwd = (data) =>
  api.create(url.POST_FAKE_PASSWORD_FORGET, data);

// Edit profile
export const postJwtProfile = (data) =>
  api.create(url.POST_EDIT_JWT_PROFILE, data);

export const postFakeProfile = (data) =>
  api.update(url.POST_EDIT_PROFILE + "/" + data.idx, data);

// Register Method
export const postJwtRegister = (url, data) => {
  return api.create(url, data).catch((err) => {
    var message;
    if (err.response && err.response.status) {
      switch (err.response.status) {
        case 404:
          message = "Sorry! the page you are looking for could not be found";
          break;
        case 500:
          message =
            "Sorry! something went wrong, please contact our support team";
          break;
        case 401:
          message = "Invalid credentials";
          break;
        default:
          message = err[1];
          break;
      }
    }
    throw message;
  });
};

// Login Method
export const postJwtLogin = (data) => api.create(url.POST_FAKE_JWT_LOGIN, data);

// postForgetPwd
export const postJwtForgetPwd = (data) =>
  api.create(url.POST_FAKE_JWT_PASSWORD_FORGET, data);

// postSocialLogin
export const postSocialLogin = (data) => api.create(url.SOCIAL_LOGIN, data);

// Calendar
// get Events
export const getEvents = () => api.get(url.GET_EVENTS);

// get Events
export const getCategories = () => api.get(url.GET_CATEGORIES);

// get Upcomming Events
export const getUpCommingEvent = () => api.get(url.GET_UPCOMMINGEVENT);

// add Events
export const addNewEvent = (event) => api.create(url.ADD_NEW_EVENT, event);

// update Event
export const updateEvent = (event) => api.put(url.UPDATE_EVENT, event);

// delete Event
export const deleteEvent = (event) =>
  api.delete(url.DELETE_EVENT, { headers: { event } });

// Chat
// get Contact
export const getDirectContact = () => api.get(url.GET_DIRECT_CONTACT);

// get Messages
export const getMessages = (roomId) =>
  api.get(`${url.GET_MESSAGES}/${roomId}`, { params: { roomId } });

// add Message
export const addMessage = (message) => api.create(url.ADD_MESSAGE, message);

// add Message
export const deleteMessage = (message) =>
  api.delete(url.DELETE_MESSAGE, { headers: { message } });

// get Channels
export const getChannels = () => api.get(url.GET_CHANNELS);

// MailBox
//get Mail
export const getMailDetails = () => api.get(url.GET_MAIL_DETAILS);

// delete Mail
export const deleteMail = (forId) =>
  api.delete(url.DELETE_MAIL, { headers: { forId } });

// Ecommerce
// get Products
export const getProducts = () => api.get(url.GET_PRODUCTS);

// delete Product
export const deleteProducts = (product) =>
  api.delete(url.DELETE_PRODUCT + "/" + product);

// add Products
export const addNewProduct = (product) =>
  api.create(url.ADD_NEW_PRODUCT, product);

// update Products
export const updateProduct = (product) =>
  api.update(url.UPDATE_PRODUCT + "/" + product._id, product);

// get Orders
export const getOrders = () => api.get(url.GET_ORDERS);

// add Order
export const addNewOrder = (order) => api.create(url.ADD_NEW_ORDER, order);

// update Order
export const updateOrder = (order) =>
  api.update(url.UPDATE_ORDER + "/" + order._id, order);

// delete Order
export const deleteOrder = (order) =>
  api.delete(url.DELETE_ORDER + "/" + order);

// get Customers
export const getCustomers = () => api.get(url.GET_CUSTOMERS);

// add Customers
export const addNewCustomer = (customer) =>
  api.create(url.ADD_NEW_CUSTOMER, customer);

// update Customers
export const updateCustomer = (customer) =>
  api.update(url.UPDATE_CUSTOMER + "/" + customer._id, customer);

// delete Customers
export const deleteCustomer = (customer) =>
  api.delete(url.DELETE_CUSTOMER + "/" + customer);

// get Sellers
export const getSellers = () => api.get(url.GET_SELLERS);

// Project
// get Project list
export const getProjectList = () => api.get(url.GET_PROJECT_LIST);

// Tasks
// get Task
export const getTaskList = () => api.get(url.GET_TASK_LIST);

// add Task
export const addNewTask = (task) => api.create(url.ADD_NEW_TASK, task);

// update Task
export const updateTask = (task) =>
  api.update(url.UPDATE_TASK + "/" + task._id, task);

// delete Task
export const deleteTask = (task) => api.delete(url.DELETE_TASK + "/" + task);

// CRM
// get Contacts
export const getContacts = () => api.get(url.GET_CONTACTS);

// add Contact
export const addNewContact = (contact) =>
  api.create(url.ADD_NEW_CONTACT, contact);

// update Contact
export const updateContact = (contact) =>
  api.update(url.UPDATE_CONTACT + "/" + contact._id, contact);

// delete Contact
export const deleteContact = (contact) =>
  api.delete(url.DELETE_CONTACT + "/" + contact);

// get Companies
export const getCompanies = () => api.get(url.GET_COMPANIES);

// add Companies
export const addNewCompanies = (company) =>
  api.create(url.ADD_NEW_COMPANIES, company);

// update Companies
export const updateCompanies = (company) =>
  api.update(url.UPDATE_COMPANIES + "/" + company._id, company);

// delete Companies
export const deleteCompanies = (company) =>
  api.delete(url.DELETE_COMPANIES + "/" + company);

// get Deals
export const getDeals = () => api.get(url.GET_DEALS);

// get Leads
export const getLeads = () => api.get(url.GET_LEADS);

// add Lead
export const addNewLead = (lead) => api.create(url.ADD_NEW_LEAD, lead);

// update Lead
export const updateLead = (lead) =>
  api.update(url.UPDATE_LEAD + "/" + lead._id, lead);

// delete Lead
export const deleteLead = (lead) => api.delete(url.DELETE_LEAD + "/" + lead);

// Crypto
// Transation
export const getTransationList = () => api.get(url.GET_TRANSACTION_LIST);

// Order List
export const getOrderList = () => api.get(url.GET_ORDRER_LIST);

// Invoice
//get Invoice
export const getInvoices = () => api.get(url.GET_INVOICES);

// add Invoice
export const addNewInvoice = (invoice) =>
  api.create(url.ADD_NEW_INVOICE, invoice);

// update Invoice
export const updateInvoice = (invoice) =>
  api.update(url.UPDATE_INVOICE + "/" + invoice._id, invoice);

// delete Invoice
export const deleteInvoice = (invoice) =>
  api.delete(url.DELETE_INVOICE + "/" + invoice);

// Support Tickets
// Tickets
export const getTicketsList = () => api.get(url.GET_TICKETS_LIST);

// add Tickets
export const addNewTicket = (ticket) => api.create(url.ADD_NEW_TICKET, ticket);

// update Tickets
export const updateTicket = (ticket) =>
  api.update(url.UPDATE_TICKET + "/" + ticket._id, ticket);

// delete Tickets
export const deleteTicket = (ticket) =>
  api.delete(url.DELETE_TICKET + "/" + ticket);

// Dashboard Analytics

// Sessions by Countries
export const getAllData = () => api.get(url.GET_ALL_DATA);
export const getHalfYearlyData = () => api.get(url.GET_HALFYEARLY_DATA);
export const getMonthlyData = () => api.get(url.GET_MONTHLY_DATA);

// Audiences Metrics
export const getAllAudiencesMetricsData = () =>
  api.get(url.GET_ALLAUDIENCESMETRICS_DATA);
export const getMonthlyAudiencesMetricsData = () =>
  api.get(url.GET_MONTHLYAUDIENCESMETRICS_DATA);
export const getHalfYearlyAudiencesMetricsData = () =>
  api.get(url.GET_HALFYEARLYAUDIENCESMETRICS_DATA);
export const getYearlyAudiencesMetricsData = () =>
  api.get(url.GET_YEARLYAUDIENCESMETRICS_DATA);

// Users by Device
export const getTodayDeviceData = () => api.get(url.GET_TODAYDEVICE_DATA);
export const getLastWeekDeviceData = () => api.get(url.GET_LASTWEEKDEVICE_DATA);
export const getLastMonthDeviceData = () =>
  api.get(url.GET_LASTMONTHDEVICE_DATA);
export const getCurrentYearDeviceData = () =>
  api.get(url.GET_CURRENTYEARDEVICE_DATA);

// Audiences Sessions by Country
export const getTodaySessionData = () => api.get(url.GET_TODAYSESSION_DATA);
export const getLastWeekSessionData = () =>
  api.get(url.GET_LASTWEEKSESSION_DATA);
export const getLastMonthSessionData = () =>
  api.get(url.GET_LASTMONTHSESSION_DATA);
export const getCurrentYearSessionData = () =>
  api.get(url.GET_CURRENTYEARSESSION_DATA);

// Dashboard CRM

// Balance Overview
export const getTodayBalanceData = () => api.get(url.GET_TODAYBALANCE_DATA);
export const getLastWeekBalanceData = () =>
  api.get(url.GET_LASTWEEKBALANCE_DATA);
export const getLastMonthBalanceData = () =>
  api.get(url.GET_LASTMONTHBALANCE_DATA);
export const getCurrentYearBalanceData = () =>
  api.get(url.GET_CURRENTYEARBALANCE_DATA);

// Dial Type
export const getTodayDealData = () => api.get(url.GET_TODAYDEAL_DATA);
export const getWeeklyDealData = () => api.get(url.GET_WEEKLYDEAL_DATA);
export const getMonthlyDealData = () => api.get(url.GET_MONTHLYDEAL_DATA);
export const getYearlyDealData = () => api.get(url.GET_YEARLYDEAL_DATA);

// Sales Forecast
export const getOctSalesData = () => api.get(url.GET_OCTSALES_DATA);
export const getNovSalesData = () => api.get(url.GET_NOVSALES_DATA);
export const getDecSalesData = () => api.get(url.GET_DECSALES_DATA);
export const getJanSalesData = () => api.get(url.GET_JANSALES_DATA);

// Dashboard Ecommerce
// Revenue
export const getAllRevenueData = () => api.get(url.GET_ALLREVENUE_DATA);
export const getMonthRevenueData = () => api.get(url.GET_MONTHREVENUE_DATA);
export const getHalfYearRevenueData = () =>
  api.get(url.GET_HALFYEARREVENUE_DATA);
export const getYearRevenueData = () => api.get(url.GET_YEARREVENUE_DATA);

// Dashboard Crypto
// Portfolio
export const getBtcPortfolioData = () => api.get(url.GET_BTCPORTFOLIO_DATA);
export const getUsdPortfolioData = () => api.get(url.GET_USDPORTFOLIO_DATA);
export const getEuroPortfolioData = () => api.get(url.GET_EUROPORTFOLIO_DATA);

// Market Graph
export const getAllMarketData = () => api.get(url.GET_ALLMARKETDATA_DATA);
export const getYearMarketData = () => api.get(url.GET_YEARMARKET_DATA);
export const getMonthMarketData = () => api.get(url.GET_MONTHMARKET_DATA);
export const getWeekMarketData = () => api.get(url.GET_WEEKMARKET_DATA);
export const getHourMarketData = () => api.get(url.GET_HOURMARKET_DATA);

// Dashboard Project
// Project Overview
export const getAllProjectData = () => api.get(url.GET_ALLPROJECT_DATA);
export const getMonthProjectData = () => api.get(url.GET_MONTHPROJECT_DATA);
export const gethalfYearProjectData = () =>
  api.get(url.GET_HALFYEARPROJECT_DATA);
export const getYearProjectData = () => api.get(url.GET_YEARPROJECT_DATA);

// Project Status
export const getAllProjectStatusData = () =>
  api.get(url.GET_ALLPROJECTSTATUS_DATA);
export const getWeekProjectStatusData = () =>
  api.get(url.GET_WEEKPROJECTSTATUS_DATA);
export const getMonthProjectStatusData = () =>
  api.get(url.GET_MONTHPROJECTSTATUS_DATA);
export const getQuarterProjectStatusData = () =>
  api.get(url.GET_QUARTERPROJECTSTATUS_DATA);

// Dashboard NFT
// Marketplace
export const getAllMarketplaceData = () => api.get(url.GET_ALLMARKETPLACE_DATA);
export const getMonthMarketplaceData = () =>
  api.get(url.GET_MONTHMARKETPLACE_DATA);
export const gethalfYearMarketplaceData = () =>
  api.get(url.GET_HALFYEARMARKETPLACE_DATA);
export const getYearMarketplaceData = () =>
  api.get(url.GET_YEARMARKETPLACE_DATA);

// Project
export const addProjectList = (project) =>
  api.create(url.ADD_NEW_PROJECT, project);
export const updateProjectList = (project) =>
  api.put(url.UPDATE_PROJECT, project);
export const deleteProjectList = (project) =>
  api.delete(url.DELETE_PROJECT, { headers: { project } });

// Pages > Team
export const getTeamData = (team) => api.get(url.GET_TEAMDATA, team);
export const deleteTeamData = (team) =>
  api.delete(url.DELETE_TEAMDATA, { headers: { team } });
export const addTeamData = (team) => api.create(url.ADD_NEW_TEAMDATA, team);
export const updateTeamData = (team) => api.put(url.UPDATE_TEAMDATA, team);

// File Manager

// Folder
export const getFolders = (folder) => api.get(url.GET_FOLDERS, folder);
export const deleteFolder = (folder) =>
  api.delete(url.DELETE_FOLDER, { headers: { folder } });
export const addNewFolder = (folder) => api.create(url.ADD_NEW_FOLDER, folder);
export const updateFolder = (folder) => api.put(url.UPDATE_FOLDER, folder);

// File
export const getFiles = (file) => api.get(url.GET_FILES, file);
export const deleteFile = (file) =>
  api.delete(url.DELETE_FILE, { headers: { file } });
export const addNewFile = (file) => api.create(url.ADD_NEW_FILE, file);
export const updateFile = (file) => api.put(url.UPDATE_FILE, file);

// To Do
export const getTodos = (todo) => api.get(url.GET_TODOS, todo);
export const deleteTodo = (todo) =>
  api.delete(url.DELETE_TODO, { headers: { todo } });
export const addNewTodo = (todo) => api.create(url.ADD_NEW_TODO, todo);
export const updateTodo = (todo) => api.put(url.UPDATE_TODO, todo);

// To do Project
export const getProjects = (project) => api.get(url.GET_PROJECTS, project);
export const addNewProject = (project) =>
  api.create(url.ADD_NEW_TODO_PROJECT, project);

//Job Application
export const getJobApplicationList = () => api.get(url.GET_APPLICATION_LIST);

//API Key
export const getAPIKey = () => api.get(url.GET_API_KEY);

// login call---------
export const LoginAPICALL = (reqbody) => api.create(url.LOGIN_URL, reqbody);
// verify user  call
export const verifyuserAPICALL = () => api.create(url.JWT_LOGIN_URL);
export const logoutuserAPICALL = (reqbody) => api.create(url.LOGOUT_URL, reqbody);

//register 
export const createTenantURL = (data) => api.create(url.CREATE_TENANT, data)

// categories-----
//get
export const getcategoryAPICALL = (reqbody) => api.create(url.VIEW_CATEGORY_URL, reqbody);
//add
export const addcategoryAPICALL = (reqbody) => api.create(url.ADD_CATEGORY_URL, reqbody);
//update
export const updatecategoryAPICALL = (reqbody) => api.create(url.UPDATE_CATEGORY_URL, reqbody);

// suppliers-----
//get
export const getsupplierAPICALL = (reqbody) => api.create(url.VIEW_SUPPLIER_URL, reqbody);
//add
export const addsupplierAPICALL = (reqbody) => api.create(url.ADD_SUPPLIER_URL, reqbody);
//update
export const updatesupplierAPICALL = (reqbody) => api.create(url.UPDATE_SUPPLIER_URL, reqbody);

// product
//get
export const getproductAPICALL = (reqbody) => api.create(url.VIEW_PRODUCT_URL, reqbody);
//add
export const addproductAPICALL = (reqbody) => api.create(url.ADD_PRODUCT_URL, reqbody);
//update
export const updateproductAPICALL = (reqbody) => api.create(url.UPDATE_PRODUCT_URL, reqbody);
//search
export const searchproductAPICALL = (reqbody) => api.create(url.SEARCH_PRODUCT_URL, reqbody);
//search
export const findproductAPICALL = (reqbody) => api.create(url.FIND_PRODUCT_URL, reqbody);

// product option
//get
export const getproductOptionAPICALL = (reqbody) => api.create(url.VIEW_PRODUCT_OPTION_URL, reqbody);
//add
export const addproductOptionAPICALL = (reqbody) => api.create(url.ADD_PRODUCT_OPTION_URL, reqbody);
//update
export const updateproductOptionAPICALL = (reqbody) => api.create(url.UPDATE_PRODUCT_OPTION_URL, reqbody);

// product option value
//get
export const getproductOptionValueAPICALL = (reqbody) => api.create(url.VIEW_PRODUCT_OPTION_VALUE_URL, reqbody);
//add
export const addproductOptionValueAPICALL = (reqbody) => api.create(url.ADD_PRODUCT_OPTION_VALUE_URL, reqbody);
//update
export const updateproductOptionValueAPICALL = (reqbody) => api.create(url.UPDATE_PRODUCT_OPTION_VALUE_URL, reqbody);


// product stock/ inventory
//get
export const getstockAPICALL = (reqbody) => api.create(url.VIEW_STOCK_URL, reqbody);
export const getstockHistoryAPICALL = (reqbody) => api.create(url.VIEW_STOCK_HISTORY_URL, reqbody);
//add
export const addstockAPICALL = (reqbody) => api.create(url.ADD_STOCK_URL, reqbody);
//update
export const updatestockAPICALL = (reqbody) => api.create(url.UPDATE_STOCK_URL, reqbody);

//brands
export const addbrandsAPICALL = (reqbody) => api.create(url.ADD_BRANDS_URL, reqbody);
export const viewbrandsAPICALL = (reqbody) => api.create(url.VIEW_BRANDS_URL, reqbody);
export const updatebrandsAPICALL = (reqbody) => api.create(url.UPDATE_BRANDS_URL, reqbody);
//customers
export const addcustomersAPICALL = (reqbody) => api.create(url.ADD_CUSTOMERS_URL, reqbody);
export const viewcustomersAPICALL = (reqbody) => api.create(url.VIEW_CUSTOMERS_URL, reqbody);
export const updatecustomersAPICALL = (reqbody) => api.create(url.UPDATE_CUSTOMERS_URL, reqbody);
//unit
export const addunitAPICALL = (reqbody) => api.create(url.ADD_UNIT_URL, reqbody);
export const viewunitAPICALL = (reqbody) => api.create(url.VIEW_UNIT_URL, reqbody);
export const updateunitAPICALL = (reqbody) => api.create(url.UPDATE_UNIT_URL, reqbody);
//DASHBAORD
export const ecommDashbaordAPICALL = (reqbody) => api.create(url.ECOMM_DASHBOARD_URL, reqbody);
export const generalDashboardAPICALL = (reqbody) => api.create(url.GENERAL_DASHBOARD_URL, reqbody);
export const productsAPICALL = (reqbody) => api.create(url.PRODUCTS_DASHBOARD_URL, reqbody);
//shop
export const addshopAPICALL = (reqbody) => api.create(url.ADD_SHOPS_URL, reqbody);
export const addEcommerceShopAPICALL = (reqbody) => api.create(url.ADD_ECOMMERCE_SHOP_URL, reqbody);
export const switchMainBranchViewAPICALL = (reqbody) => api.create(url.SWITCH_MAIN_BRANCH_VIEW_URL, reqbody);
export const switchOutletSetup = (reqbody) => api.create(url.SWITCH_OUTLET_SETUP, reqbody);
export const viewshopAPICALL = (reqbody) => api.create(url.VIEW_SHOPS_URL, reqbody);
export const updateshopAPICALL = (reqbody) => api.create(url.UPDATE_SHOPS_URL, reqbody);
export const createconsigAPICALL = (reqbody) => api.create(url.CREATE_CONSIG_URL, reqbody);

export const recievedConsigAPICALL = (reqbody) => api.create(url.RECIEVE_CONSIG, reqbody);
export const consigItemsAPICALL = (reqbody) => api.create(url.CONSIG_ITEMS, reqbody);

export const transferproductsAPICALL = (reqbody) => api.create(url.TRANSFER_PRODUCTS_URL, reqbody);

export const viewtransferproductsAPICALL = (reqbody) => api.create(url.VIEW_TRANSFER_PRODUCTS_URL, reqbody);
export const viewstockTransferproductsAPICALL = (reqbody) => api.create(url.VIEW_STOCK_TRANSFER, reqbody);

export const deletetransferproductsAPICALL = (reqbody) => api.create(url.DELETE_TRANSFER_PRODUCTS_URL, reqbody);
//pos
export const makesaleAPICALL = (reqbody) => api.create(url.MAKE_SALE_URL, reqbody);
export const salesHistoryAPICALL = (reqbody) => api.create(url.SALES_HISTORY, reqbody);
export const creditHistoryAPICALL = (reqbody) => api.create(url.CREDIT_HISTORY, reqbody);

export const getUsersAPICALL = (reqbody) => api.create(url.VIEW_USERS, reqbody);
export const assignShopAPICALL = (reqbody) => api.create(url.ASIGN_SHOP_URL, reqbody);
export const createUserAPICALL = (reqbody) => api.create(url.CREATE_USER, reqbody);
export const updateUserAPICALL = (reqbody) => api.create(url.UPDATE_USER_URL, reqbody);

//outlet-product
export const viewOutletProductAPICALL = (reqbody) => api.create(url.VIEW_OUTLET_PRODUCT_URL, reqbody);

//income and expenses 
export const getIncomeExpensesAPICALL = (reqbody) => api.create(url.VIEW_INCOME_EXPENSES_URL, reqbody);
export const updateIncomeExpensesAPICALL = (reqbody) => api.create(url.UPDATE_INCOME_EXPENSES_URL, reqbody);
export const createIncomeExpensesAPICALL = (reqbody) => api.create(url.CREATE_INCOME_EXPENSES_URL, reqbody);

//barcode
export const getBarCodeManagementAPICALL = (reqbody) => api.create(url.VIEW_BARCODE_MANAGEMENT_URL, reqbody);
export const updateBarCodeManagementAPICALL = (reqbody) => api.create(url.UPDATE_BARCODE_MANAGEMENT_URL, reqbody);
export const createBarCodeManagementAPICALL = (reqbody) => api.create(url.CREATE_BARCODE_MANAGEMENT_URL, reqbody);

//income and expenses 
export const getPayrollAPICALL = (reqbody) => api.create(url.VIEW_PAYROLL_URL, reqbody);
export const payCreditAPICALL = (reqbody) => api.create(url.PAY_CREDIT_URL, reqbody);
export const updatePayrollAPICALL = (reqbody) => api.create(url.UPDATE_PAYROLL_URL, reqbody);
export const createPayrollAPICALL = (reqbody) => api.create(url.CREATE_PAYROLL_URL, reqbody);


//expense category
export const viewexpenseCategoryAPICALL = (reqbody) => api.create(url.EXPENSE_CATEGORY_URL, reqbody);
export const addexpenseCategoryAPICALL = (reqbody) => api.create(url.ADD_EXPENSE_CATEGORY_URL, reqbody);
export const updateexpenseCategoryAPICALL = (reqbody) => api.create(url.UPDATE_EXPENSE_CATEGORY_URL, reqbody);
//income category
export const viewincomeCategoryAPICALL = (reqbody) => api.create(url.INCOME_CATEGORY_URL, reqbody);
export const addincomeCategoryAPICALL = (reqbody) => api.create(url.ADD_INCOME_CATEGORY_URL, reqbody);
export const updateincomeCategoryAPICALL = (reqbody) => api.create(url.UPDATE_INCOME_CATEGORY_URL, reqbody);

//expense category
export const viewexpenseAPICALL = (reqbody) => api.create(url.EXPENSE_URL, reqbody);
export const addexpensePICALL = (reqbody) => api.create(url.ADD_EXPENSE_URL, reqbody);
export const updateexpenseAPICALL = (reqbody) => api.create(url.UPDATE_EXPENSE_URL, reqbody);
//income category
export const viewincomeAPICALL = (reqbody) => api.create(url.INCOME_URL, reqbody);
export const addincomeAPICALL = (reqbody) => api.create(url.ADD_INCOME_URL, reqbody);
export const updateincomeAPICALL = (reqbody) => api.create(url.UPDATE_INCOME_URL, reqbody);

//REPORTS
export const salesByCategoryAPICALL = (reqbody) => api.create(url.SALES_BY_CATEGORY, reqbody)
export const salesByProfitChargesAPICALL = (reqbody) => api.create(url.SALES_PROFIT_CHARGES, reqbody)
export const employeePerformanceBySalesAPICALL = (reqbody) => api.create(url.EMPLOYEE_PERFOEMACE_BY_SALES, reqbody)
export const profitMarginsAPICALL = (reqbody) => api.create(url.PROFIT_MARGINS, reqbody)
export const overheadExpensesAPICALL = (reqbody) => api.create(url.OVERHEAD_EXPENSES, reqbody)
export const reorderAPICALL = (reqbody) => api.create(url.REORDER, reqbody)
export const reorderByOutletAPICALL = (reqbody) => api.create(url.REORDER_BY_OUTLET, reqbody)
export const profitForOutletAPICALL = (reqbody) => api.create(url.PROFIT_FOR_OUTLET, reqbody)
export const outletinventoryReportAPICALL = (reqbody) => api.create(url.OUTLET_INVENTORY_REPORT, reqbody)

//switching
export const viewOutletsAPICALL = (reqbody) => api.create(url.VEIW_OUTLETS, reqbody)
export const switchOutletAPICALL = (reqbody) => api.create(url.SWITCH_OUTLET, reqbody)

//PAYROLL
//BANKS
export const viewbankAPICALL = (reqbody) => api.create(url.VIEW_BANK, reqbody)
export const addBankAPICALL = (reqbody) => api.create(url.ADD_BANK, reqbody)
export const updateBankAPICALL = (reqbody) => api.create(url.UPDATE_BANK, reqbody)
export const addBankAccountAPICALL = (reqbody) => api.create(url.ADD_BANK_ACCOUNT, reqbody)
export const updateBankAccountAPICALL = (reqbody) => api.create(url.UPDATE_BANK_ACCOUNT, reqbody)
export const viewBankAccountAPICALL = (reqbody) => api.create(url.VIEW_BANK_ACCOUNT, reqbody)

//allowance and deductions
export const allowanceAPICALL = (reqbody) => api.create(url.ALLOWANCES, reqbody)
export const addAllowanceAPICALL = (reqbody) => api.create(url.ADD_ALLOWANCES, reqbody)
export const updateAllowanceAPICALL = (reqbody) => api.create(url.UPDATE_ALLOWANCES, reqbody)

export const deductionsAPICALL = (reqbody) => api.create(url.DEDUCTION, reqbody)
export const addDeductionsAPICALL = (reqbody) => api.create(url.ADD_DEDUCTION, reqbody)
export const updateDeductionsAPICALL = (reqbody) => api.create(url.UPDATE_DEDUCTION, reqbody)


//BANDS (groups)
export const createGroupBandAPICALL = (reqbody) => api.create(url.CREATE_GROUP_BAND, reqbody)
export const viewGroupBandAPICALL = (reqbody) => api.create(url.VIEW_GROUP_BAND, reqbody)
export const updateGroupBandAPICALL = (reqbody) => api.create(url.UPDATE_GROUP_BAND, reqbody)

export const assignbandAPICALL = (reqbody) => api.create(url.BAND_ASSIGNMENT, reqbody)
export const viewBandAssignmentAPICALL = (reqbody) => api.create(url.VIEW_BAND_ASSIGNMENT, reqbody)
export const updateBandAssignmentAPICALL = (reqbody) => api.create(url.UPDATE_BAND_ASSIGNMENT, reqbody)


export const updateUserProfileURL = (data) =>
  api.create(url.UPDATE_USER_PROFILE, data);

  export const changePasswordURL = (data) =>
  api.create(url.CHANGE_PASSWORD, data);


  //band assignments and deductions
  export const viewBandAllowanceAPICALL = (reqbody) => api.create(url.VIEW_BAND_ALLOWANCE, reqbody)
  export const updateBandAllowanceAPICALL = (reqbody) => api.create(url.UPDATE_BAND_ALLOWANCE, reqbody)
  export const createBandAllowanceAPICALL = (reqbody) => api.create(url.CREATE_BAND_ALLOWANCE, reqbody)


  export const viewBandDeductionAPICALL = (reqbody) => api.create(url.VIEW_BAND_DEDUCTION, reqbody)
  export const updateBandDeductionAPICALL = (reqbody) => api.create(url.UPDATE_BAND_DEDUCTION, reqbody)
  export const createBandDeductionAPICALL = (reqbody) => api.create(url.CREATE_BAND_DEDUCTION, reqbody)


  //SHIPPINGS & lOCAITONS
  export const addCarrierAPICALL = (reqbody) => api.create(url.ADD_CARRIER, reqbody)
  export const viewCarrierAPICALL = (reqbody) => api.create(url.VIEW_CARRIER, reqbody)
  export const updateCarrierAPICALL = (reqbody) => api.create(url.UPDATE_CARRIER, reqbody)
  export const addCarrierRateAPICALL = (reqbody) => api.create(url.ADD_CARRIER_RATE, reqbody)
  
  export const addParentLocationAPICALL = (reqbody) => api.create(url.ADD_PARENT_LOCATION, reqbody)
  export const addSubLocationAPICALL = (reqbody) => api.create(url.ADD_SUB_LOCATION, reqbody)
  export const updateLocationAPICALL = (reqbody) => api.create(url.UPDATE_LOCATION, reqbody)
  export const viewCascadedLocationAPICALL = (reqbody) => api.create(url.VIEW_CASCADED_LOCATION, reqbody)
  export const viewLocationsAPICALL = (reqbody) => api.create(url.VIEW_LOCATIONS, reqbody)
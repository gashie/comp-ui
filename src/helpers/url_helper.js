//REGISTER
let version_one = '/api/v1/shop'
export const POST_FAKE_REGISTER = "/auth/signup";

//LOGIN
export const POST_FAKE_LOGIN = "/auth/signin";
export const POST_FAKE_JWT_LOGIN = "/post-jwt-login";
export const POST_FAKE_PASSWORD_FORGET = "/auth/forgot-password";
export const POST_FAKE_JWT_PASSWORD_FORGET = "/jwt-forget-pwd";
export const SOCIAL_LOGIN = "/social-login";

//PROFILE
export const POST_EDIT_JWT_PROFILE = "/post-jwt-profile";
export const POST_EDIT_PROFILE = "/user";

// Calendar
export const GET_EVENTS = "/events";
export const GET_CATEGORIES = "/categories";
export const GET_UPCOMMINGEVENT = "/upcommingevents";
export const ADD_NEW_EVENT = "/add/event";
export const UPDATE_EVENT = "/update/event";
export const DELETE_EVENT = "/delete/event";

// Chat
export const GET_DIRECT_CONTACT = "/chat";
export const GET_MESSAGES = "/messages";
export const ADD_MESSAGE = "add/message";
export const GET_CHANNELS = "/channels";
export const DELETE_MESSAGE = "delete/message";

//Mailbox
export const GET_MAIL_DETAILS = "/mail";
export const DELETE_MAIL = "/delete/mail";

// Ecommerce
// Product
export const GET_PRODUCTS = "/apps/product";
export const DELETE_PRODUCT = "/apps/product";
export const ADD_NEW_PRODUCT = "/apps/product";
export const UPDATE_PRODUCT = "/apps/product";

// Orders
export const GET_ORDERS = "/apps/order";
export const ADD_NEW_ORDER = "/apps/order";
export const UPDATE_ORDER = "/apps/order";
export const DELETE_ORDER = "/apps/order";

// Customers
export const GET_CUSTOMERS = "/apps/customer";
export const ADD_NEW_CUSTOMER = "/apps/customer";
export const UPDATE_CUSTOMER = "/apps/customer";
export const DELETE_CUSTOMER = "/apps/customer";

// Sellers
export const GET_SELLERS = "/sellers";

// Project list
export const GET_PROJECT_LIST = "/project/list";

// Task
export const GET_TASK_LIST = "/apps/task";
export const ADD_NEW_TASK = "/apps/task";
export const UPDATE_TASK = "/apps/task";
export const DELETE_TASK = "/apps/task";

// CRM
// Conatct
export const GET_CONTACTS = "/apps/contact";
export const ADD_NEW_CONTACT = "/apps/contact";
export const UPDATE_CONTACT = "/apps/contact";
export const DELETE_CONTACT = "/apps/contact";

// Companies
export const GET_COMPANIES = "/apps/company";
export const ADD_NEW_COMPANIES = "/apps/company";
export const UPDATE_COMPANIES = "/apps/company";
export const DELETE_COMPANIES = "/apps/company";

// Lead
export const GET_LEADS = "/apps/lead";
export const ADD_NEW_LEAD = "/apps/lead";
export const UPDATE_LEAD = "/apps/lead";
export const DELETE_LEAD = "/apps/lead";

// Deals
export const GET_DEALS = "/deals";

// Crypto
export const GET_TRANSACTION_LIST = "/transaction-list";
export const GET_ORDRER_LIST = "/order-list";

// Invoice
export const GET_INVOICES = "/apps/invoice";
export const ADD_NEW_INVOICE = "/apps/invoice";
export const UPDATE_INVOICE = "/apps/invoice";
export const DELETE_INVOICE = "/apps/invoice";

// TicketsList
export const GET_TICKETS_LIST = "/apps/ticket";
export const ADD_NEW_TICKET = "/apps/ticket";
export const UPDATE_TICKET = "/apps/ticket";
export const DELETE_TICKET = "/apps/ticket";

// Dashboard Analytics

// Sessions by Countries
export const GET_ALL_DATA = "/all-data";
export const GET_HALFYEARLY_DATA = "/halfyearly-data";
export const GET_MONTHLY_DATA = "/monthly-data";

// Audiences Metrics
export const GET_ALLAUDIENCESMETRICS_DATA = "/allAudiencesMetrics-data";
export const GET_MONTHLYAUDIENCESMETRICS_DATA = "/monthlyAudiencesMetrics-data";
export const GET_HALFYEARLYAUDIENCESMETRICS_DATA =
  "/halfyearlyAudiencesMetrics-data";
export const GET_YEARLYAUDIENCESMETRICS_DATA = "/yearlyAudiencesMetrics-data";

// Users by Device
export const GET_TODAYDEVICE_DATA = "/todayDevice-data";
export const GET_LASTWEEKDEVICE_DATA = "/lastWeekDevice-data";
export const GET_LASTMONTHDEVICE_DATA = "/lastMonthDevice-data";
export const GET_CURRENTYEARDEVICE_DATA = "/currentYearDevice-data";

// Audiences Sessions by Country
export const GET_TODAYSESSION_DATA = "/todaySession-data";
export const GET_LASTWEEKSESSION_DATA = "/lastWeekSession-data";
export const GET_LASTMONTHSESSION_DATA = "/lastMonthSession-data";
export const GET_CURRENTYEARSESSION_DATA = "/currentYearSession-data";

// Dashboard CRM

// Balance Overview
export const GET_TODAYBALANCE_DATA = "/todayBalance-data";
export const GET_LASTWEEKBALANCE_DATA = "/lastWeekBalance-data";
export const GET_LASTMONTHBALANCE_DATA = "/lastMonthBalance-data";
export const GET_CURRENTYEARBALANCE_DATA = "/currentYearBalance-data";

// Deal type
export const GET_TODAYDEAL_DATA = "/todayDeal-data";
export const GET_WEEKLYDEAL_DATA = "/weeklyDeal-data";
export const GET_MONTHLYDEAL_DATA = "/monthlyDeal-data";
export const GET_YEARLYDEAL_DATA = "/yearlyDeal-data";

// Sales Forecast

export const GET_OCTSALES_DATA = "/octSales-data";
export const GET_NOVSALES_DATA = "/novSales-data";
export const GET_DECSALES_DATA = "/decSales-data";
export const GET_JANSALES_DATA = "/janSales-data";

// Dashboard Ecommerce
// Revenue
export const GET_ALLREVENUE_DATA = "/allRevenue-data";
export const GET_MONTHREVENUE_DATA = "/monthRevenue-data";
export const GET_HALFYEARREVENUE_DATA = "/halfYearRevenue-data";
export const GET_YEARREVENUE_DATA = "/yearRevenue-data";

// Dashboard Crypto
// Portfolio
export const GET_BTCPORTFOLIO_DATA = "/btcPortfolio-data";
export const GET_USDPORTFOLIO_DATA = "/usdPortfolio-data";
export const GET_EUROPORTFOLIO_DATA = "/euroPortfolio-data";

// Market Graph
export const GET_ALLMARKETDATA_DATA = "/allMarket-data";
export const GET_YEARMARKET_DATA = "/yearMarket-data";
export const GET_MONTHMARKET_DATA = "/monthMarket-data";
export const GET_WEEKMARKET_DATA = "/weekMarket-data";
export const GET_HOURMARKET_DATA = "/hourMarket-data";

// Dashboard Crypto
// Project Overview
export const GET_ALLPROJECT_DATA = "/allProject-data";
export const GET_MONTHPROJECT_DATA = "/monthProject-data";
export const GET_HALFYEARPROJECT_DATA = "/halfYearProject-data";
export const GET_YEARPROJECT_DATA = "/yearProject-data";

// Project Status
export const GET_ALLPROJECTSTATUS_DATA = "/allProjectStatus-data";
export const GET_WEEKPROJECTSTATUS_DATA = "/weekProjectStatus-data";
export const GET_MONTHPROJECTSTATUS_DATA = "/monthProjectStatus-data";
export const GET_QUARTERPROJECTSTATUS_DATA = "/quarterProjectStatus-data";

// Dashboard NFT
// Marketplace
export const GET_ALLMARKETPLACE_DATA = "/allMarketplace-data";
export const GET_MONTHMARKETPLACE_DATA = "/monthMarketplace-data";
export const GET_HALFYEARMARKETPLACE_DATA = "/halfYearMarketplace-data";
export const GET_YEARMARKETPLACE_DATA = "/yearMarketplace-data";

// Project
export const ADD_NEW_PROJECT = "/add/project";
export const UPDATE_PROJECT = "/update/project";
export const DELETE_PROJECT = "/delete/project";

// Pages > Team
export const GET_TEAMDATA = "/teamData";
export const DELETE_TEAMDATA = "/delete/teamData";
export const ADD_NEW_TEAMDATA = "/add/teamData";
export const UPDATE_TEAMDATA = "/update/teamData";

// File Manager
// Folder
export const GET_FOLDERS = "/folder";
export const DELETE_FOLDER = "/delete/folder";
export const ADD_NEW_FOLDER = "/add/folder";
export const UPDATE_FOLDER = "/update/folder";

// File
export const GET_FILES = "/file";
export const DELETE_FILE = "/delete/file";
export const ADD_NEW_FILE = "/add/file";
export const UPDATE_FILE = "/update/file";

// To do
export const GET_TODOS = "/todo";
export const DELETE_TODO = "/delete/todo";
export const ADD_NEW_TODO = "/add/todo";
export const UPDATE_TODO = "/update/todo";

// To do Project
export const GET_PROJECTS = "/projects";
export const ADD_NEW_TODO_PROJECT = "/add/project";

//JOB APPLICATION
export const GET_APPLICATION_LIST = "/application-list";

//JOB APPLICATION
export const GET_API_KEY = "/api-key";

//auth
export const LOGIN_URL =`${version_one}/login`;
export const JWT_LOGIN_URL = `${version_one}/auth`;
export const LOGOUT_URL = `${version_one}/logout`;

//register
export const CREATE_TENANT = `${version_one}/tenantsignup`

//catgories

export const ADD_CATEGORY_URL =`${version_one}/addcategory`;
export const VIEW_CATEGORY_URL = `${version_one}/viewcategory`;
export const UPDATE_CATEGORY_URL = `${version_one}/updatecategory`;


//customers

export const VIEW_CUSTOMERS_URL =`${version_one}/viewcustomer`;
export const ADD_CUSTOMERS_URL = `${version_one}/addcustomer`;
export const UPDATE_CUSTOMERS_URL = `${version_one}/updatecustomer`;


//suppliers

export const ADD_SUPPLIER_URL =`${version_one}/addsupplier`;
export const VIEW_SUPPLIER_URL = `${version_one}/viewsupplier`;
export const UPDATE_SUPPLIER_URL = `${version_one}/updatesupplier`;

//product
export const ADD_PRODUCT_URL =`${version_one}/addproduct`;
export const VIEW_PRODUCT_URL = `${version_one}/viewproduct`;
export const VIEW_OUTLET_PRODUCT_URL = `${version_one}/viewoutletproduct`;
export const UPDATE_PRODUCT_URL = `${version_one}/updateproduct`;
export const FIND_PRODUCT_URL = `${version_one}/findproduct`;
export const SEARCH_PRODUCT_URL = `${version_one}/searchproduct`;

//product option
export const ADD_PRODUCT_OPTION_URL =`${version_one}/addproductoption`;
export const VIEW_PRODUCT_OPTION_URL = `${version_one}/viewproductoption`;
export const UPDATE_PRODUCT_OPTION_URL = `${version_one}/updateproductoption`;

//product option VALUE
export const ADD_PRODUCT_OPTION_VALUE_URL =`${version_one}/addoptionvalue`;
export const VIEW_PRODUCT_OPTION_VALUE_URL = `${version_one}/searchoptionvalue`;
export const UPDATE_PRODUCT_OPTION_VALUE_URL = `${version_one}/updateoptionvalue`;

//stocking or inventory
export const ADD_STOCK_URL =`${version_one}/addinventory`;
export const VIEW_STOCK_URL =`${version_one}/viewinventory`;
export const VIEW_STOCK_HISTORY_URL =`${version_one}/viewinventoryhistory`;
export const UPDATE_STOCK_URL =`${version_one}/updateinventory`;

//brands
export const ADD_BRANDS_URL = `${version_one}/addbrand`;
export const VIEW_BRANDS_URL = `${version_one}/viewbrands`;
export const UPDATE_BRANDS_URL = `${version_one}/updatebrand`;

//shops
export const ADD_SHOPS_URL = `${version_one}/addshop`;
export const ADD_ECOMMERCE_SHOP_URL = `${version_one}/addecommerce`;

export const SWITCH_MAIN_BRANCH_VIEW_URL = `${version_one}/switch_outlet_view`;
export const SWITCH_OUTLET_SETUP = `${version_one}/switch_outlet_setup`;

export const VIEW_SHOPS_URL = `${version_one}/viewshops`;
export const UPDATE_SHOPS_URL = `${version_one}/updateshop`;



export const CREATE_CONSIG_URL = `${version_one}/pickupconsignment`;

export const TRANSFER_PRODUCTS_URL = `${version_one}/initiatetransfer`;
export const VIEW_STOCK_TRANSFER = `${version_one}/viewstockfortransfer`;

export const VIEW_TRANSFER_PRODUCTS_URL = `${version_one}/viewtransfer`;
export const DELETE_TRANSFER_PRODUCTS_URL = `${version_one}/deletetransfer`;
export const RECIEVE_CONSIG = `${version_one}/receiveconsignment`;
export const CONSIG_ITEMS = `${version_one}/viewtconsignmentitems`;


export const GENERAL_DASHBOARD_URL = `${version_one}/updateshop`;
export const PRODUCTS_DASHBOARD_URL = `${version_one}/productreport`;
export const ECOMM_DASHBOARD_URL = `${version_one}/updateshop`;

//units
export const ADD_UNIT_URL = `${version_one}/addunit`;
export const VIEW_UNIT_URL = `${version_one}/viewunit`;
export const UPDATE_UNIT_URL = `${version_one}/updateunit`;

//pos
export const MAKE_SALE_URL = `${version_one}/sell`;
export const VIEW_SALE = `${version_one}/addunit`;

//sales history
export const SALES_HISTORY = `${version_one}/sales`;
export const CREDIT_HISTORY = `${version_one}/credit_history`;

//asign shop
export const ASIGN_SHOP_URL = `${version_one}/assigntoshop`;
export const VIEW_USERS = `${version_one}/viewusers`;
export const CREATE_USER = `${version_one}/createuser`;
export const UPDATE_USER_URL = `${version_one}/updateuser`;

//income and expenses
export const VIEW_INCOME_EXPENSES_URL = `${version_one}/incomexpensereport`
export const UPDATE_INCOME_EXPENSES_URL = `${version_one}/assigntoshop`
//export const DELETE_INCOME_EXPENSES_URL = `${version_one}/assigntoshop`
export const CREATE_INCOME_EXPENSES_URL = `${version_one}/assigntoshop`

//income and expenses
export const VIEW_CREDIT_URL = `${version_one}/assigntoshop`
export const UPDATE_CREDIT_URL = `${version_one}/assigntoshop`
//export const DELETE_CREDIT_URL = `${version_one}/assigntoshop`
export const CREATE_CREDIT_URL = `${version_one}/pay_credit`

//
export const PAY_CREDIT_URL = `${version_one}/pay_credit`

//barcode
export const VIEW_BARCODE_MANAGEMENT_URL = `${version_one}/assigntoshop`
export const UPDATE_BARCODE_MANAGEMENT_URL = `${version_one}/assigntoshop`
//export const DELETE_BARCODE_MANAGEMENT_URL = `${version_one}/assigntoshop`
export const CREATE_BARCODE_MANAGEMENT_URL = `${version_one}/assigntoshop`

//barcode
export const VIEW_PAYROLL_URL = `${version_one}/assigntoshop`
export const UPDATE_PAYROLL_URL = `${version_one}/assigntoshop`
//export const DELETE_PAYROLL_URL = `${version_one}/assigntoshop`
export const CREATE_PAYROLL_URL = `${version_one}/assigntoshop`

//expense category
export const EXPENSE_CATEGORY_URL = `${version_one}/viewexpensecategory`
export const ADD_EXPENSE_CATEGORY_URL = `${version_one}/addexpensecategory`
export const UPDATE_EXPENSE_CATEGORY_URL = `${version_one}/updateexpensecategory`
//income category
export const INCOME_CATEGORY_URL = `${version_one}/viewincomecategory`
export const ADD_INCOME_CATEGORY_URL = `${version_one}/addincomecategory`
export const UPDATE_INCOME_CATEGORY_URL = `${version_one}/updateincomecategory`

//expense categoryviewexpensecategory
export const EXPENSE_URL = `${version_one}/viewexpense`
export const ADD_EXPENSE_URL = `${version_one}/addexpense`
export const UPDATE_EXPENSE_URL = `${version_one}/updateexpense`
//income
export const INCOME_URL = `${version_one}/viewincome`
export const ADD_INCOME_URL = `${version_one}/addincome`
export const UPDATE_INCOME_URL = `${version_one}/updateincome`

//other reports 
export const SALES_BY_CATEGORY =  `${version_one}/viewsalesbycategory`
export const SALES_PROFIT_CHARGES =  `${version_one}/viewsalesandprofitcharges`
export const EMPLOYEE_PERFOEMACE_BY_SALES =  `${version_one}/viewemployeeperformance`
export const PROFIT_MARGINS =  `${version_one}/vieweprofitmargins`
export const OVERHEAD_EXPENSES =  `${version_one}/viewoverheadexpenses`
export const REORDER =  `${version_one}/viewereoder`
export const REORDER_BY_OUTLET =  `${version_one}/viewereoderbyoutlet`
export const PROFIT_FOR_OUTLET =  `${version_one}/viewprofitforoutlet`
export const OUTLET_INVENTORY_REPORT = `${version_one}/outletinventoryreport`

//
export const VEIW_OUTLETS = `${version_one}/switch_outlet_view`
export const SWITCH_OUTLET = `${version_one}/switch_outlet_setup`


//paYroll endpoinnts
//BANK
export const VIEW_BANK = `${version_one}/view_banks`
export const ADD_BANK = `${version_one}/add_bank`
export const UPDATE_BANK = `${version_one}/update_bank`
export const ADD_BANK_ACCOUNT = `${version_one}/add_bankaccount`
export const UPDATE_BANK_ACCOUNT = `${version_one}/update_bankaccount`
export const VIEW_BANK_ACCOUNT = `${version_one}/view_bankaccount`


//Group Bands
export const CREATE_GROUP_BAND = `${version_one}/add_groupband`
export const VIEW_GROUP_BAND = `${version_one}/view_groupband`
export const UPDATE_GROUP_BAND = `${version_one}/update_groupband`

export const BAND_ASSIGNMENT = `${version_one}/assigntoband`
export const VIEW_BAND_ASSIGNMENT = `${version_one}/view_assignedgroupband`
export const UPDATE_BAND_ASSIGNMENT = `${version_one}/update_assignedgroupband`



//allowances & Deductions
export const ALLOWANCES = `${version_one}/view_allowance`
export const ADD_ALLOWANCES = `${version_one}/createallowance`
export const UPDATE_ALLOWANCES = `${version_one}/update_allowance`

export const DEDUCTION = `${version_one}/view_deduction`
export const ADD_DEDUCTION = `${version_one}/creatededuction`
export const UPDATE_DEDUCTION = `${version_one}/update_deduction`

//band deduction
export const CREATE_BAND_DEDUCTION = `${version_one}/create_banddeduction`
export const UPDATE_BAND_DEDUCTION = `${version_one}/create_banddeduction`
export const VIEW_BAND_DEDUCTION = `${version_one}/view_banddeduction`

//bandAllowance
export const CREATE_BAND_ALLOWANCE = `${version_one}/create_bandallowance`
export const UPDATE_BAND_ALLOWANCE = `${version_one}/update_bandallowance`
export const VIEW_BAND_ALLOWANCE = `${version_one}/view_bandallowance`



export const UPDATE_USER_PROFILE = `${version_one}/update_profile/`
export const CHANGE_PASSWORD = `${version_one}/resetinapppassword/`

//

//shipping and locations
export const ADD_CARRIER = `${version_one}/add_shipping_carrier/`
export const VIEW_CARRIER = `${version_one}/view_shipping_carrier/`
export const UPDATE_CARRIER = `${version_one}/update_shipping_carrier/`

export const ADD_CARRIER_RATE = `${version_one}/add_shipping_rate/`

export const ADD_PARENT_LOCATION = `${version_one}/add_parent_location/`
export const ADD_SUB_LOCATION = `${version_one}/add_sub_location/`
export const UPDATE_LOCATION = `${version_one}/update_location/`
export const VIEW_CASCADED_LOCATION = `${version_one}/view_cascaded_locations/`
export const VIEW_LOCATIONS = `${version_one}/view_locations/`
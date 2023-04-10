
export const baseUrl = `http://3.111.227.14:8092`;

// auth links (login,logout)

export const login_URL =`/api/login`;
export const logout_URL =`/api/logout`;


// Employee_Details
export const employee_details_URL =`/api/fetch_employee_details`;

// HolidayList,TimeSheet,ProjectList,maxWorkingHours,ActivityType,
export const holiday_List_URL =`/api/getholiday`;
export const create_TimeSheet = `/api/createtimesheet`;
export const fetch_ProjectList = `/api/fetch_assigned_project/`;
export const max_working_hour = `/api/max_work_hours/MAXIMUM_WORKING_HOURS`;
export const activity_Type = `/api/fetchlookup/?lookup_type=TASKNAME`;
export const activity_status = `/api/fetchlookup/?lookup_type=TASKSTATUS`;
export const fetch_TimeSheet = `/api/gettimesheet`;
export const delete_TimeSheet = `/api/deletetimesheet/`;

// Leaves

export const TotalleavesCount = `/api/fetchleavescountbyuserid`;
export const leaveType = `/api/fetchleavetypesfromleavemaster/`;
export const leaveDayType = `/api/fetchlookup/?lookup_type=DAY_TYPE`;








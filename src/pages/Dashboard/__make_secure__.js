/*
 * -----------------------
 ?          BASIC
 * -----------------------
 * 1. Do not show the link to them who should not see it
 * 2. Only show the person/types of user who should see it
 * 3. Do not allow to visit the link by typing on the url. If not admin then redirect to any other page.
 *    You could logout user and send them to the login page as will.
 * 
 * -----------------------
 ?       TO SEND DATA
 * -----------------------
 * 1. Verify JWT token (send authorization token in the header to the server). 
 *    If possible use axios to send JWT token by intercepting the request
 * 
 * 2. If it is an admin activity. Make sure only admin user is posting data by using verifyAdmin. 
*/

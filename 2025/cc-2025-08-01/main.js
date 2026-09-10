/**
 * @param {string[]} emails
 * @return {number}
 */
// emails contain a local name and a domain name that are seperated by the first '@' in the email
// emails can consist of lowercase character, one @, 0 or more "." and '+'
// '+' in the local name skips everything including itself
// '.' are removed in the local name
var numUniqueEmails = function(emails) {
    const uniqueEmails = new Set();
    for(const email of emails){
        let localNameParse = '';
        const end = email.indexOf('@');
        for(let i = 0; i < end; i++){
            // loop through the local name 
                // don't add '.'
                // end loop if '+'
            if(email[i] === '.'){continue}
            if(email[i] === '+'){break}
            localNameParse += email[i];
        }
        // return parsedLocalName + @ + domain name
        const parsedEmail = localNameParse + email.slice(end);
        uniqueEmails.add(parsedEmail);
    }
    return uniqueEmails.size;
};
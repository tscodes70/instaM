var UserProfile = (function () {
    var username = "";
    var useremail = "";

    var getName = function () {
        return username;    // Or pull this from cookie/localStorage
    };

    var setName = function (name) {
        username = name;
        // Also set this in cookie/localStorage
    };

    var getEmail = function () {
        return useremail;    // Or pull this from cookie/localStorage
    };

    var setEmail = function (email) {
        useremail = email;
        // Also set this in cookie/localStorage
    };

    var clearProfile = function () {
        username = "";
        useremail = "";
    }

    return {
        getName: getName,
        setName: setName,
        getEmail: getEmail,
        setEmail: setEmail,
        clearProfile: clearProfile
    }

})();

export default UserProfile;
function register_user(username, name, password, success_function, error_function) {
    if (username == 'test') {
        error_function('That username is already in use.');
        return;
    }
    if (username.length > 0 && name.length > 0 && password.length > 0) {
        success_function('The user is created successfully!');
        return;
    }

    error_function('No data provided.');
}
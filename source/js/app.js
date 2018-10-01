const   menuPage = document.getElementById('menuPage'),
        menuButton = document.getElementById('menuButton'),
        searchBar = document.getElementById('searchBar'),
        searchButton = document.getElementById('searchButton'),
        notificationsPage = document.getElementById('notificationsPage');

searchButton.addEventListener('click', showSearchBar);
menuButton.addEventListener('click', showMenu);

function showSearchBar () {
    if  (!searchBar.classList.contains('header__searchbar_visible')) {
        searchBar.classList.add('header__searchbar_visible');
    } else searchBar.classList.remove('header__searchbar_visible');
}

function showMenu () {
    if (!menuPage.classList.contains('menu_visible')) {
        menuPage.classList.remove('menu_hidden');
        menuPage.classList.add('menu_visible');
        notificationsPage.classList.remove('notifications_menu-hidden');
        notificationsPage.classList.add('notifications_menu-visible');
    } else {
        menuPage.classList.remove('menu_visible');
        menuPage.classList.add('menu_hidden');
        notificationsPage.classList.remove('notifications_menu-visible');
        notificationsPage.classList.add('notifications_menu-hidden');
    }
}
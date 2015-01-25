function Tab(element) {

    var navTabsElements = element.find('.nav-tabs li');

    navTabsElements.on('click', function () {

        $(this).addClass('active');
        navTabsElements.not(this).removeClass('active');

        var tabContentId = $(this).find('a').attr('href');

        element.find('.tab').not($(tabContentId)).removeClass('active');
        $(tabContentId).addClass('active');
    });
}

window.Tab = Tab;
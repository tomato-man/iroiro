$(function () {
    sessionStorage.setItem('imui-side-menu-state', 'HIDE');
    $('#side-show').on('click');
    $('#imbox_right').css({
        position: 'fixed',
        left: '60%'
    });
    $('#GroupBoxMenu').css('position', 'fixed');
});

// 2.2
let elm1, elm2, elm3, elm4, elm5, elm6, elm7, elm8;
let fontSize1 = 1.2;
let fontSize2 = 1.0;

// 文字サイズを変更する
let changeFontSize = (diff) => {
    fontSize1 = fontSize1 + diff;
    fontSize2 = fontSize2 + diff;
    setFontSize(fontSize1, fontSize2);
};
// 文字サイズを設定する
let setFontSize = (size1, size2) => {
    // 2.2
    elm1 = $('#imui-container div.imbox div.imbox-timeline div.imbox-timeline-body #imbox_timeline_thread div.imbox-timeline-thread-body');
    elm2 = $('#imui-container div.imbox div.imbox-timeline div.imbox-timeline-body #imbox_timeline_thread div.imbox-timeline-thread-body div.imbox-timeline-thread-bottom div.imbox-timeline-thread-posted-option div.imbox-timeline-thread-posted-option-body.imbox-timeline-thread-reply-message ');
    elm3 = $('#imui-container div.imbox div.imbox-timeline div.imbox-timeline-body #imbox_timeline_thread div.imbox-timeline-thread-body div.imbox-timeline-thread-bottom div.imbox-timeline-thread-posted-option div.imbox-timeline-thread-posted-option-body.imbox-timeline-thread-reply-message span.imbox-timeline-thread-reply-right a.imbox-timeline-thread-reply-user-name');
    elm4 = $('#imui-container div.imbox div.imbox-timeline div.imbox-timeline-body #imbox_timeline_thread div.imbox-timeline-thread-body div.imbox-timeline-thread-bottom div.imbox-timeline-thread-posted-option div.imbox-timeline-thread-posted-option-body.imbox-timeline-thread-reply-message span.imbox-timeline-thread-reply-right span.imbox-timeline-thread-message-text');
    elm5 = $('#imui-container div.imbox div.imbox-timeline div.imbox-timeline-body #imbox_timeline_thread div.imbox-timeline-thread-body div.imbox-timeline-thread-bottom div.imbox-timeline-thread-posted-option div.imbox-timeline-thread-posted-option-body.imbox-timeline-thread-add-usera span.imbox-timeline-thread-directmessage-join-user');
    elm6 = $('#imui-container div.imbox div.imbox-timeline div.imbox-timeline-body #imbox_timeline_thread div.imbox-timeline-thread-body div.imbox-timeline-thread-bottom div.imbox-timeline-thread-posted-option div.imbox-timeline-thread-posted-old a.imbox-timeline-thread-posted-old-fn');
    elm7 = $('thread-body div.imbox-timeline-thread-bottom div.imbox-timeline-thread-posted-option div.imbox-timeline-thread-posted-option-body.imbox-timeline-thread-reply-message span.imbox-timeline-thread-reply-right span.imbox-timeline-thread-message-text');
    // 1.8
    elm8 = $('#imui-container div.imbox div.imbox-timeline div.imbox-timeline-body #imbox_timeline_thread div.imbox-timeline-thread-body div.imbox-timeline-thread-notice-user-area span.imbox-timeline-thread-notice-user');
    elm9 = $('#imui-container div.imbox div.imbox-timeline div.imbox-timeline-body #imbox_timeline_thread div.imbox-timeline-thread-body div.imbox-timeline-thread-bottom div.imbox-timeline-thread-posted-option div.imbox-timeline-thread-posted-like');

    elm1.css('font-size', size1 + 'rem');
    elm2.css('font-size', size1 + 'rem');
    elm3.css('font-size', size1 + 'rem');
    elm4.css('font-size', size1 + 'rem');
    elm5.css('font-size', size1 + 'rem');
    elm6.css('font-size', size1 + 'rem');
    elm7.css('font-size', size1 + 'rem');
    elm8.css('font-size', size2 + 'rem');
    elm9.css('font-size', size2 + 'rem');
};
// 表示領域を広げる・戻す
let expandThread = () => {
    let span1 = $('#imui-container div.imbox div.imbox-timeline div.imbox-timeline-body #imbox_timeline_thread div.imbox-timeline-thread-body div.imbox-timeline-thread-bottom div.imbox-timeline-thread-posted-option div.imbox-timeline-thread-posted-option-body.imbox-timeline-thread-reply-message span.imbox-timeline-thread-reply-right');
    let span2 = $('#imui-container div.imbox div.imbox-timeline div.imbox-timeline-body #imbox_timeline_thread div.imbox-timeline-thread-body span.imbox-timeline-thread-post-right');
    if ($('#imbox_left').hasClass('span8')) {
        $('#imbox_left').removeClass('span8');
        span1.css('width', 'inherit');
        span2.css('width', 'inherit');
    } else {
        let main = $('#imui-container div.imbox div.imbox-main');
        if (!main.hasClass('expand')) {
            main.addClass('expand').css('width', '95%');
        } else {
            main.removeClass('expand').css('width', '940px');
            $('#imbox_left').addClass('span8');
            span1.css('width', '500px');
            span2.css('width', '500px');
        }
    }
};

$(function () {
    // ツールバーにアイコン追加
    let addIcon = (iconClass, title, onclick) => {
        let menuOuterDiv = $('<div>');
        menuOuterDiv.addClass('imbox-menu-icon-outer imbox-menu-dropdown-top imbox-menu-balloon-fn imbox-menu-hover-fn');
        menuOuterDiv.attr('title', title);
        let menuAnchor = $('<a href="javascript:' + onclick + '">');
        menuAnchor.addClass('imbox-menu-icon-inner imbox-menu-link-fn" data-menu_type="Top');
        let icon = $('<span>').addClass(iconClass);
        menuOuterDiv.append(menuAnchor.append(icon)).appendTo('#imbox_menu > div > div > div > nav > div > div');
    }

    // タイトルクリックでグループボックスメニューを非表示にする
    $('#imui-container > div.imui-title > h1').on('click', function () {
        if ($('#GroupBoxMenu:visible').length > 0) {
            $('#GroupBoxMenu').hide("slide", {
                direction: "left"
            }, 300);
            localStorage.setItem('imbox-groupboxmenu-visibility', false);
        } else {
            $('#GroupBoxMenu').show("slide", {
                direction: "left"
            }, 300);
            localStorage.setItem('imbox-groupboxmenu-visibility', true);
        }
    });

    // 文字を大きくする
    addIcon('im-ui-icon-viewcreator-32-addition-active', '文字を大きくする', 'changeFontSize(0.2)');
    // 文字を小さくする
    addIcon('im-ui-icon-viewcreator-32-subtraction-active', '文字を小さくする', 'changeFontSize(-0.2)');
    // スレッド表示領域を広げる
    addIcon('im-smart-icon-common-32-display-switch-2', 'スレッド表示領域を広げる', 'expandThread()');

    // 初期表示処理
    // グループボックスメニュー表示状態設定
    if (localStorage.getItem('imbox-groupboxmenu-visibility') !== 'true') {
        setTimeout(() => {
            if ($('#GroupBoxMenu').length > 0) {
                $('#GroupBoxMenu').hide("slide", {
                    direction: "left"
                }, 300);
                return;
            }
        }, 500);
    }

});


//$('#sidebar > ul:nth-child(8)').addClass('ui-helper-hidden-accessible')
//$('#sidebar > h3:nth-child(7)').on('click', (e) => {
//    $('#sidebar > ul:nth-child(8)').toggleClass('ui-helper-hidden-accessible')
//});

const classNameSinglePane = 'single-pane';
const toggleSidebar = (e) => {
    if ($('#main').hasClass(classNameSinglePane)) {
        $('#sidebar').animate({
            width: 'toggle'
        });
        $('#content').animate({
            width: '77%'
        });
        $('#main').removeClass(classNameSinglePane);
    } else {
        $('#sidebar').animate({
            width: 'toggle'
        });
        $('#content').animate({
            width: '98%'
        });
        $('#main').addClass(classNameSinglePane);
    }
};
$('#content > h2').on('click', toggleSidebar);
$(document).on('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 226) {
        toggleSidebar();
    }
});
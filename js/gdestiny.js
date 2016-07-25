window.addEventListener('WebComponentsReady', function(e) {
  var navigator = function(e) {
    console.log('navigate!');
    var url = e.originalEvent.detail.url;
    window.open(url, '_blank');
  };

  $('#tabs').bind('iron-select', function(e) {
    var index = e.originalEvent.target.selected;
    var pages = $('#pages')[0];
    var element = pages.children[index];

    // Load the element if needed.
    if (index > 0 && element.children.length == 0) {
      var memberList = element.appendChild(new MemberList());
      var isXbox = index == 1;
      var dataAttribute = isXbox ? 'xblUsers' : 'psnUsers';
      $.getJSON('data/userdata.json', function(data) {
        var users = JSON.stringify(data[dataAttribute]);
        if (isXbox) {
          memberList.setAttribute('is-xbox', 'pointless value');
        }
        memberList.setAttribute('users', users);

        // Load Google+ badges now that the DOM has been fully loaded.
        $.getScript('https://apis.google.com/js/platform.js', function() {
          gapi.person.go();
        });

        $(memberList).bind('member-navigate', navigator);
      });
    }

    pages.select(index);
  });
});

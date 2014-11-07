$(document).ready(function () {

  // Please use your own API key !
  $('.lastfm-chart').lastfm('aapljack','topalbums','e0de46d270197ba1e7878e99a5b54085', {
    period: '7day',
    limit: '5',
    image: false,
    header: false
  });
  $(".instagram").instagram({
    userId: '1588265',
    clientId: 'e0d748e676a04859b7bebb33a1cb91eb',
    accessToken: '1588265.e0d748e.9c91e51e830d41b9ae88296b659fdb18',
    show: '12',
    image_size: 'low_resolution'
  });

  $("#elsewhere").FeedEk({
    FeedUrl : 'http://feeds.pinboard.in/rss/u:aapljack/t:centerweight',
    MaxCount : 3,
    ShowDesc : true,
    ShowPubDate: false,
    TitleLinkTarget:'_blank'
  });
});


// curl \-F 'client_id=e0d748e676a04859b7bebb33a1cb91eb' \
//     -F 'client_secret=4267c0a987ce4e16a86c89b75f872f53' \
//     -F 'grant_type=authorization_code' \
//     -F 'redirect_uri=http://www.centerweight.com' \
//     -F 'code=bc8b5fbca7104b30a57fd30d7318442f' \https://api.instagram.com/oauth/access_token


  //     https://api.instagram.com/oauth/authorize/?client_id=e0d748e676a04859b7bebb33a1cb91eb&redirect_uri=http://www.centerweight.com&response_type=code


  //     Return Code = bc8b5fbca7104b30a57fd30d7318442f

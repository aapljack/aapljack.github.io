$(document).ready(function () {

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
    FeedUrl : 'https://feeds.pinboard.in/rss/u:aapljack/t:centerweight',
    MaxCount : 3,
    ShowDesc : true,
    ShowPubDate: false,
    TitleLinkTarget:'_blank'
  });
});
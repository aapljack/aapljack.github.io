$(document).ready(function () {

  $('.lastfm-chart').lastfm('aapljack','topalbums','e0de46d270197ba1e7878e99a5b54085', {
    period: '7day',
    limit: '5',
    image: false,
    header: false
  });

  $("#elsewhere").FeedEk({
    FeedUrl : 'https://feeds.pinboard.in/rss/u:aapljack/t:centerweight',
    MaxCount : 3,
    ShowDesc : true,
    ShowPubDate: false,
    TitleLinkTarget:'_blank'
  });
});
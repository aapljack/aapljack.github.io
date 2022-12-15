$(document).ready(function () {

  $('.lastfm-chart').lastfm('aapljack','topalbums','e0de46d270197ba1e7878e99a5b54085', {
    period: '7day',
    limit: '5',
    image: false,
    header: false
  });

  // $(".instagram").instagram({
  //   userId: '1588265',
  //   clientId: '814874716256302',
  //   accessToken: 'IGQVJYaDlfX01MTm9ORVJuQkd4cFNnUmJXNjljZAUNsVnRDR2p5RFM4MmlpczV0XzU3WmdOeWFoYVRSSloxTHF6VklfWlo1WnQxOHdkZA3F3REdUaDRtWjkwWTl2VldDbU8yaVkwSTNR',
  //   show: '12',
  //   image_size: 'low_resolution'
  // });

  $("#elsewhere").FeedEk({
    FeedUrl : 'https://feeds.pinboard.in/rss/u:aapljack/t:centerweight',
    MaxCount : 3,
    ShowDesc : true,
    ShowPubDate: false,
    TitleLinkTarget:'_blank'
  });
});
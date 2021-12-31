module.exports = {
  /** Site MetaData (Required all)*/
  title: `SC blog`,                           // (* Required)
  description: `study blog`,          // (* Required)
  author: `SeungCheol`,                         // (* Required)
  language: 'ko-KR',                        // (* Required) html lang, ex. 'en' | 'en-US' | 'ko' | 'ko-KR' | ...
  siteUrl: 'https://pch8388.github.io',                      // (* Required)
  search: true,

  /** Header */
  profileImageFileName: '', // include filename extension ex.'profile.jpg'
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: 'Back-end developer',
  name: 'SeungCheol',
  //company: '',
  location: 'Korea',
  email: 'pch838811@gmail.com',
  website: 'https://pch8388.github.io',           // ex.'https://junhobaik.github.io'
  github: 'https://github.com/pch8388',                                                            // ex.'https://github.com/junhobaik'

  /** Post */
  enablePostOfContents: true,     // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: 'pch8388-github-io',            // comments (Disqus sort-name)
  enableSocialShare: true,        // Social share icon activation (Type of Value: Boolean. Not String)
  
  /** Optional */
  googleAnalytics: 'UA-216031512-2',     // Google Analytics TrackingID. ex.'UA-123456789-0'
  googleSearchConsole: 'yesM7ie0PFxkPcKblwnwqMAt8lqzwNKkhFqamEya_E0', // content value in HTML tag of google search console ownership verification. ex.'w-K42k14_I4ApiQKuVPbCRVV-GxlrqWxYoqO94KMbKo'
  googleAdsenseSlot: '',   // Google Adsense Slot. ex.'5214956675'
  googleAdsenseClient: '', // Google Adsense Client. ex.'ca-pub-5001380215831339'
    // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
};

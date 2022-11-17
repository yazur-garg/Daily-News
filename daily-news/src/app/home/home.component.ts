import { Component, OnInit } from '@angular/core';
import { News } from '../News';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  newslist: Array<News> = [
    {
      source: { id: null, name: "Investor's Business Daily" },
      author: "Investor's Business Daily",
      title:
        "GM Stock Rebounds As Auto Giant Sees Electric Cars Profitable By 2025 | Investor's Business Daily - Investor's Business Daily",
      description: 'GM laid out its EV strategy Thursday. Shares moved higher.',
      url: 'https://www.investors.com/news/gm-stock-general-motors-expects-electric-vehicles-generate-profit/',
      urlToImage:
        'https://www.investors.com/wp-content/uploads/2020/11/Stock-GM-cadillacLyriq-02-company.jpg',
      publishedAt: '2022-11-17T20:39:00Z',
      content:
        'General Motors (GM) raised 2022 cash-flow guidance Thursday after confirming it expects to make profitable electric cars by mid-decade. GM stock rose in choppy trade, after undercutting a buy point W… [+4310 chars]',
    },
    {
      source: { id: null, name: 'ESPN' },
      author: 'Tim McManus',
      title: 'Eagles add Ndamukong Suh to beef up defensive line - ESPN',
      description:
        'Defensive tackle Ndamukong Suh has reached agreement on a one-year deal with the Philadelphia Eagles.',
      url: 'https://www.espn.com/nfl/story/_/id/35047477/sources-eagles-adding-ndamukong-suh-beef-defensive-line',
      urlToImage:
        'https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0303%2Fr981592_1296x729_16%2D9.jpg',
      publishedAt: '2022-11-17T19:46:22Z',
      content:
        'PHILADELPHIA -- The Eagles continue to load up along the defensive interior.\r\nThey agreed to terms with defensive tackle Ndamukong Suh on a one-year deal Thursday, one day after signing fellow vetera… [+2168 chars]',
    },
    {
      source: { id: 'reuters', name: 'Reuters' },
      author: 'Tim McManus',
      title:
        'Ukraine may get access to missile blast site - Polish officials - Reuters',
      description:
        'Ukraine may get the access it has demanded to the site in the border area of southeastern Poland where a missile killed two people on Tuesday, Polish officials said on Thursday.',
      url: 'https://www.reuters.com/world/europe/ukraine-will-probably-get-access-blast-site-says-polish-official-2022-11-17/',
      urlToImage:
        'https://www.reuters.com/resizer/1M_C4WTmx5GpGzzlYzu8-J-_tuI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ON55E6BIJNM7ZPXQE2KN6MZPM4.jpg',
      publishedAt: '2022-11-17T19:33:00Z',
      content:
        'PRZEWODOW, Poland/WARSAW, Nov 17 (Reuters) - Ukraine may get the access it has demanded to the site in the border area of southeastern Poland where a missile killed two people on Tuesday, Polish offi… [+4191 chars]',
    },
    {
      source: { id: null, name: 'Fox Business' },
      author: 'Megan Henney',
      title:
        "New FTX boss condemns Bankman-Fried for 'complete failure of corporate controls' - Fox Business",
      description:
        'John Ray III, the new FTX CEO tasked with investigating the collapse of the crypto exchange, slammed the leadership of predecessor Sam Bankman-Fried.',
      url: 'https://www.foxbusiness.com/markets/new-ftx-boss-condemns-bankman-fried-for-complete-failure-of-corporate-controls',
      urlToImage:
        'https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/11/0/0/SBF.jpg?ve=1&tl=1',
      publishedAt: '2022-11-17T19:20:14Z',
      content:
        'The new CEO of collapsed crypto exchange FTX on Thursday issued a scathing rebuke of his predecessor, Sam Bankman-Fried, accusing the former boss of allowing "a complete failure of corporate controls… [+3819 chars]',
    },
    {
      source: { id: 'associated-press', name: 'Associated Press' },
      author: 'Lisa Mascaro, Brian Slodysko',
      title:
        "McConnell reelected Senate GOP leader: 'Not going anywhere' - The Associated Press",
      description:
        'WASHINGTON (AP) — Sen. Mitch McConnell was reelected as Republican leader Wednesday, quashing a challenge from Sen. Rick Scott of Florida, the Senate GOP campaign chief criticized after a disappointing performance in the midterm elections  that kept Senate co…',
      url: 'https://apnews.com/article/florida-mitch-mcconnell-congress-9f1be1d3635127dbb3e17a3fae1ac86d',
      urlToImage:
        'https://storage.googleapis.com/afs-prod/media/32e4550409ec436d89134920f20d50d6/3000.jpeg',
      publishedAt: '2022-11-17T19:16:35Z',
      content:
        'WASHINGTON (AP) Sen. Mitch McConnell was reelected as Republican leader Wednesday, quashing a challenge from Sen. Rick Scott of Florida, the Senate GOP campaign chief criticized after a disappointing… [+5941 chars]',
    },
    {
      source: { id: null, name: 'BBC News' },
      author: 'https://www.facebook.com/bbcnews',
      title: 'Nancy Pelosi stands down as leader of US House Democrats - BBC',
      description:
        'The 82-year-old has led the party in the lower chamber of Congress for almost two decades.',
      url: 'https://www.bbc.com/news/world-us-canada-63669581',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/47DC/production/_127669381_gettyimages-1442266796.jpg',
      publishedAt: '2022-11-17T19:13:28Z',
      content:
        'Media caption, Watch: Nancy Pelosi announces she will stand down as leader of House Democrats\r\nNancy Pelosi, who has led Democrats in the US House of Representatives for almost two decades, has annou… [+5013 chars]',
    },
    {
      source: { id: null, name: 'Kotaku' },
      author: 'Ashley Bardhan',
      title: 'How To Get Shinies In Pokémon Scarlet and Violet - Kotaku',
      description:
        'A Twitter dataminer assures fans that their cherished ‘Masuda method’ gets the job done',
      url: 'https://kotaku.com/pokemon-scarlet-violet-shiny-hunting-starter-sandwich-1849796776',
      urlToImage:
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/27dd690c19822ac7bcd261b786d74ad4.jpg',
      publishedAt: '2022-11-17T18:45:00Z',
      content:
        'Twitter dataminer and self-described efficientPokémon player @Sibuna_Switch has shared Pokémon Scarlet and Violets shiny rates, determined for the soon-to-be-released game, and an important decree: a… [+2747 chars]',
    },
    {
      source: { id: 'cnn', name: 'CNN' },
      author: 'Annie Grayer, Sara Murray, Marshall Cohen',
      title:
        "House Republicans vow to investigate Biden and his family's business dealings - CNN",
      description:
        "After clinching the majority in the House of Representatives in the midterm elections, top Republicans on Thursday outlined a broad range of investigative targets focused on President Joe Biden and his family's business dealings.",
      url: 'https://www.cnn.com/2022/11/17/politics/house-republicans-white-house-hunter-biden/index.html',
      urlToImage:
        'https://media.cnn.com/api/v1/images/stellar/prod/221117113322-hunter-biden-0418-file.jpg?c=16x9&q=w_800,c_fill',
      publishedAt: '2022-11-17T18:35:00Z',
      content:
        'After clinching the majority in the House of Representatives in the midterm elections, top Republicans on Thursday outlined a broad range of investigative targets focused on President Joe Biden and h… [+7245 chars]',
    },
    {
      source: { id: null, name: 'Gizmodo.com' },
      author: 'George Dvorsky',
      title:
        "What's Next for the Orion Spacecraft as It Cruises Toward the Moon - Gizmodo",
      description:
        "NASA's Artemis 1 capsule is en route to the Moon, where it’s expected to break a number of spacefaring records—including one set during Apollo 13.",
      url: 'https://gizmodo.com/orion-spacecraft-nasa-moon-journey-1849796028',
      urlToImage:
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e488c0d847f0c5b5dc973b9646cdd6b5.jpg',
      publishedAt: '2022-11-17T18:16:00Z',
      content:
        'NASAs Space Launch System blasted off on Wednesday, sending the uncrewed Orion spacecraft on a 25-day journey to the Moon and back. Orion should reach its destination early next week, at which time i… [+4447 chars]',
    },
    {
      source: { id: 'google-news', name: 'Google News' },
      author: 'Tim McManus',
      title:
        'Starbucks Workers Strike at Dozens of Stores Nationally - The New York Times',
      description: 'GM laid out its EV strategy Thursday. Shares moved higher.',
      url: 'https://news.google.com/__i/rss/rd/articles/CBMiT2h0dHBzOi8vd3d3Lm55dGltZXMuY29tLzIwMjIvMTEvMTcvYnVzaW5lc3MvZWNvbm9teS9zdGFyYnVja3MtdW5pb24tc3RyaWtlLmh0bWzSAQA?oc=5',
      urlToImage:
        'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e488c0d847f0c5b5dc973b9646cdd6b5.jpg',
      publishedAt: '2022-11-17T17:53:57Z',
      content:
        'NASAs Space Launch System blasted off on Wednesday, sending the uncrewed Orion spacecraft on a 25-day journey to the Moon and back. Orion should reach its destination early next week, at which time i… [+4447 chars]',
    },
  ];
  ngOnInit(): void {}
}

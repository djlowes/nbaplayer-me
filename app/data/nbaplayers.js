//--------------------------------------
//NBA Players Data
//--------------------------------------
var players =
[
  {
  "name": "Lebron James",
  "photo": "https://espnfivethirtyeight.files.wordpress.com/2017/05/lebron11.jpg?w=575&quality=90&strip=info",
  "scores":[
      4,
      4,
      3,
      3,
      5,
      2,
      4,
      2,
      4,
      4
    ]
  },
  {
  "name": "Russell Westbrook",
  "photo": "https://usatftw.files.wordpress.com/2016/01/usatsi_9067452.jpg?w=1000&h=600&crop=1",
  "scores":[
      5,
      2,
      1,
      5,
      3,
      1,
      5,
      1,
      1,
      5
    ]
  },
  {
  "name": "Carmelo Anthony",
  "photo": "http://assets.nydailynews.com/polopoly_fs/1.3575606.1508467091!/img/httpImage/image.jpg_gen/derivatives/article_750/knicks-thunder-basketball.jpg",
  "scores":[
      4,
      3,
      1,
      2,
      2,
      2,
      3,
      2,
      2,
      4
    ]
  },
  {
  "name": "Kevin Durant",
  "photo": "http://uproxx.files.wordpress.com/2017/01/gettyimages-632534566-jpg.jpeg?quality=100&w=650",
  "scores":[
      2,
      4,
      3,
      3,
      4,
      4,
      5,
      3,
      4,
      2
    ]
  },
  {
  "name": "Kawhi Leonard",
  "photo": "http://static-15.sinclairstoryline.com/resources/media/4a719084-c33e-4474-b682-676cc438555a-large16x9_AP17113131986336.jpg",
  "scores":[
      3,
      3,
      3,
      4,
      5,
      5,
      4,
      3,
      5,
      1
    ]
  },
  {
  "name": "Anthony Davis",
  "photo": "http://images.performgroup.com/di/library/omnisport/78/8e/anthony-davis-011617-getty-ftr-usjpg_zo2ic3x4kwlw1p4turrm0sg03.jpg?t=-1453233247&w=960&quality=70",
  "scores":[
      4,
      1,
      2,
      2,
      4,
      3,
      3,
      3,
      3,
      2
    ]
  },
  {
  "name": "Steph Curry",
  "photo": "https://si.wsj.net/public/resources/images/ON-BZ434_Stephe_B940_20170201133222.jpg",
  "scores":[
      2,
      5,
      3,
      3,
      5,
      4,
      4,
      4,
      3,
      3
    ]
  },
  {
  "name": "Chris Paul",
  "photo": "https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/10/20/chris-paul-injury-update.jpg",
  "scores":[
      2,
      5,
      5,
      2,
      5,
      4,
      4,
      4,
      2,
      2
    ]
  },
  {
  "name": "James Harden",
  "photo": "http://www.addmorejuice.com/wp-content/uploads/2017/07/James-harden.jpg",
  "scores":[
      5,
      5,
      2,
      3,
      5,
      4,
      5,
      4,
      2,
      3
    ]
  },
  {
  "name": "Damian Lillard",
  "photo": "https://sportshub.cbsistatic.com/i/r/2017/04/13/6fbace97-7e50-4ebe-acb3-f59d920c0677/thumbnail/770x433/70feb2452dd165f969410acfa5cc9f1c/damian-lillard.jpg",
  "scores":[
      4,
      3,
      2,
      4,
      4,
      3,
      3,
      3,
      2,
      3
    ]
  },
  {
  "name": "Kyle Lowry",
  "photo": "https://uproxx.files.wordpress.com/2016/05/kyle-lowry2.jpg?quality=100&w=650&h=373",
  "scores":[
      4,
      3,
      3,
      3,
      3,
      4,
      4,
      3,
      2,
      4
    ]
  },
  {
  "name": "Paul George",
  "photo": "https://cdn.inquisitr.com/wp-content/uploads/2017/10/goals-for-paul-george-in-2017-18.jpg",
  "scores":[
      2,
      2,
      2,
      2,
      3,
      3,
      4,
      3,
      2,
      3
    ]
  },
  {
  "name": "John Wall",
  "photo": "https://images.complex.com/complex/images/c_limit,w_680/fl_lossy,pg_1,q_auto/n2im1hgukr8q9r4q8eiw/john-wall",
  "scores":[
      5,
      4,
      4,
      5,
      4,
      2,
      4,
      3,
      1,
      3
    ]
  },
  {
  "name": "Draymond Green",
  "photo": "https://bloximages.chicago2.vip.townnews.com/wiscnews.com/content/tncms/assets/v3/editorial/7/27/727b2abc-d3d2-531f-ba00-6276591ce769/575e05202ff59.image.jpg",
  "scores":[
      5,
      3,
      1,
      3,
      4,
      1,
      4,
      1,
      1,
      5
    ]
  },
  {
  "name": "DeMarcus Cousings",
  "photo": "http://images.performgroup.com/di/library/omnisport/65/46/demarcuscousins-cropped_19qbnw3czglha1fhdlgamasaun.jpg?t=-1281938641&w=960&quality=70",
  "scores":[
      4,
      1,
      2,
      1,
      3,
      2,
      3,
      2,
      2,
      5
    ]
  },
  {
  "name": "Klay Thompson",
  "photo": "http://images.performgroup.com/di/library/group_content_la/6/77/klay-thompson-golden-state-warriors-16122015_170hqszbsjj7j1loo11feeiowz.jpg?t=-1349390223&w=960&quality=70",
  "scores":[
      2,
      2,
      2,
      3,
      5,
      5,
      3,
      4,
      4,
      1
    ]
  },
  {
  "name": "Kyrie Irving",
  "photo": "http://images.performgroup.com/di/library/group_content_la/6/77/klay-thompson-golden-state-warriors-16122015_170hqszbsjj7j1loo11feeiowz.jpg?t=-1349390223&w=960&quality=70",
  "scores":[
      5,
      5,
      2,
      5,
      4,
      3,
      5,
      4,
      3,
      2
    ]
  },
  {
  "name": "Giannis Antetokounmpo",
  "photo": "https://www.gannett-cdn.com/-mm-/368d6aeb1c1b5b4a27ac9d6450bb290b0bcf3d3b/c=403-55-3580-2444&r=x404&c=534x401/local/-/media/2017/10/17/WIGroup/Milwaukee/636438607236607764-GAN-20170415-ram-ss9-060.jpg",
  "scores":[
      4,
      3,
      3,
      5,
      4,
      4,
      4,
      3,
      3,
      2
    ]
  },
  {
  "name": "Blake Griffin",
  "photo": "https://img.bleacherreport.net/img/images/photos/003/684/678/hi-res-2dab2e6e71ce05aabc475b7a16a84800_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
  "scores":[
      5,
      1,
      3,
      3,
      5,
      4,
      4,
      3,
      3,
      2
    ]
  },
  {
  "name": "Karl-Anthony Towns",
  "photo": "http://upl.stack.com/wp-content/uploads/2017/01/10131636/Karl-Anthony-Towns-STACK.jpg",
  "scores":[
      3,
      2,
      2,
      3,
      3,
      4,
      2,
      2,
      4,
      2
    ]
  }
]

module.exports = players;

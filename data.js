var APP_DATA = {
  "scenes": [
    {
      "id": "0-atrium_edited",
      "name": "Atrium_edited",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -3.140090510441741,
        "pitch": -0.6060047614962976,
        "fov": 1.3174782681794857
      },
      "linkHotspots": [
        {
          "yaw": -0.48235395324695673,
          "pitch": 0.062187924943112094,
          "rotation": 0,
          "target": "1-level-2_edited"
        },
        {
          "yaw": 0.03885595520359253,
          "pitch": 0.0788370719990894,
          "rotation": 0,
          "target": "2-level-3_edited"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9763009956455857,
          "pitch": -0.41033034856409145,
          "title": "Welcome",
          "text": "This is NUS School of Business"
        },
        {
          "yaw": -0.1942019221620832,
          "pitch": 0.11360586642539872,
          "title": "Lift",
          "text": "to level 2 (left) or level 3 (right)"
        }
      ]
    },
    {
      "id": "1-level-2_edited",
      "name": "Level 2_edited",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.5611787557957619,
        "pitch": -0.11302709218239038,
        "fov": 1.3174782681794857
      },
      "linkHotspots": [
        {
          "yaw": 2.4616580140845086,
          "pitch": 0.35360121890219887,
          "rotation": 9.42477796076938,
          "target": "0-atrium_edited"
        },
        {
          "yaw": 2.457566553151449,
          "pitch": 0.24652532327080934,
          "rotation": 0,
          "target": "2-level-3_edited"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.5785169794443927,
          "pitch": 0.3047679134828343,
          "title": "Lift",
          "text": "Take the lift to level 1 or 3"
        },
        {
          "yaw": 1.1959272378024544,
          "pitch": -0.0043124158929011,
          "title": "Seminar rooms",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-level-3_edited",
      "name": "Level 3_edited",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.642248073407581,
          "pitch": 0.09615325950050213,
          "rotation": 3.141592653589793,
          "target": "0-atrium_edited"
        },
        {
          "yaw": 1.7325276925158342,
          "pitch": 0.1518421526492979,
          "rotation": 3.141592653589793,
          "target": "1-level-2_edited"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.6423954029536514,
          "pitch": 0.2088378113567746,
          "title": "Lift",
          "text": "Take the lift back to level 1"
        },
        {
          "yaw": 1.8739566460777883,
          "pitch": 0.1551170885393489,
          "title": "Stairs&nbsp;",
          "text": "Take the stairs back to level 2"
        },
        {
          "yaw": -0.8185482277114708,
          "pitch": -0.2089225135677939,
          "title": "Seminar rooms",
          "text": "More study places"
        }
      ]
    }
  ],
  "name": "businesstest",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};

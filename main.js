const zodiac_signs = ['Capricorn', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Aries', 'Aquarius', 'Pisces']

  const zodiac_profiles = 
  [
    {
      zodiac_name: 'Capricorn',
      start_month: 12,
      start_day: 22,
      end_month: 1,
      end_day: 19, 
      zodiac_sound: 'audio/capricorn.mp3',
      zodiac_image: 'images/capricorn.png',
      zodiac_text_description: 'jdhbfb',
    },

    {
      zodiac_name: 'Taurus',
      start_month: 4,
      start_day: 20,
      end_month: 5,
      end_day: 20,
      zodiac_sound: 'audio/taurus.mp3',
      zodiac_image: 'images/taurus.png',
      zodiac_text_description:'',
    },

    {
      zodiac_name: 'Gemini',
      start_month: 5,
      start_day: 21,
      end_month: 6,
      end_day: 20,
      zodiac_sound: 'audio/gemini.mp3',
      zodiac_image: 'images/gemini.png',
      zodiac_text_description:'',
    },

    {
      zodiac_name: 'Cancer',
      start_month: 6,
      start_day: 21,
      end_month: 7,
      end_day: 22,
      zodiac_sound: 'audio/cancer.mp3',
      zodiac_image: 'images/cancer.png',
      zodiac_text_description:'',
    },
    
    {
      zodiac_name: 'Leo',
      start_month: 7,
      start_day: 23,
      end_month: 8,
      end_day: 22,
      zodiac_sound: 'audio/leo.mp3',
      zodiac_image: 'images/leo.png',
      zodiac_text_description:'',
    },
    {
      zodiac_name: 'Virgo',
      start_month: 8,
      start_day: 23,
      end_month: 9,
      end_day: 22,
      zodiac_sound: 'audio/virgo.mp3',
      zodiac_image: 'images/virgo.png',
      zodiac_text_description:'',
    },
    {
      zodiac_name: 'Libra',
      start_month: 9,
      start_day: 23,
      end_month: 10,
      end_day: 22,
      zodiac_sound: 'audio/.libra.mp3',
      zodiac_image: 'images/libra.png',
      zodiac_text_description:'',
    },
    {
      zodiac_name: 'Scorpio',
      start_month: 10,
      start_day: 23,
      end_month: 11,
      end_day: 21,
      zodiac_sound: 'audio/scorpio.mp3',
      zodiac_image: 'images/scoripio.png',
      zodiac_text_description:'',
    },
    {
      zodiac_name: 'Sagittarius',
      start_month: 11,
      start_day: 22,
      end_month: 12,
      end_day: 21,
      zodiac_sound: 'audio/sagittarius.mp3',
      zodiac_image: 'images/saggitarius.png',
      zodiac_text_description:'',
    },
    {
      zodiac_name: 'Aries',
      start_month: 3,
      start_day: 21,
      end_month: 4,
      end_day: 19,
      zodiac_sound: 'audio/aries.mp3',
      zodiac_image: 'images/aries.png',
      zodiac_text_description:'',
    },
    {
      zodiac_name: 'Aquarius',
      start_month: 1,
      start_day: 20,
      end_month: 2,
      end_day: 18,
      zodiac_sound: 'audio/aquarius.mp3',
      zodiac_image: 'images/aquarius.png',
      zodiac_text_description:'',
    },
    {
      zodiac_name: 'Pisces',
      start_month: 2,
      start_day: 19,
      end_month: 3,
      end_day: 20,
      zodiac_sound:'auido/pisces.mp3',
      zodiac_image: 'images/pisces.png',
      zodiac_text_description:'',
    }      
  ];

  function show_zodiac_image(zodiac_name){}

  function play_zodiac_sound(zodiac_name){}

  function zodiac_text_description(zodiac_name){}
  
  function get_zodiac_sign(month, day){
    for (const zodiac_profile of zodiac_profiles){
      if (month===zodiac_profile.start_month && day>= zodiac_profile.start_day || month===zodiac_profile.end_month && day<=zodiac_profile.end_day){
        return zodiac_profile.zodiac_name;
      }

  }
  return null;
};  

  
 console.log(get_zodiac_sign(12, 20));
 console.log(get_zodiac_sign(3,14))








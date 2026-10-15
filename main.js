const zodiac_signs = ['Capricorn', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Aries', 'Aquarius', 'Pisces']

  const zodiac_profiles = 
  [
    {
      zodiac_name: 'Capricorn',
      start_month: 'December',
      start_day: 22,
      end_month: 'January',
      end_day: 19, 
    },
    {
      zodiac_name: 'Taurus',
      start_month: 'April',
      start_day: 20,
      end_month: 'May',
      end_day: 20,
    },
    {
      zodiac_name: 'Gemini',
      start_month: 'May',
      start_day: 21,
      end_month: 'June',
      end_day: 20,
    },
    {
      zodiac_name: 'Cancer',
      start_month: 'June',
      start_day: 21,
      end_month: 'July',
      end_day: 22,
    },
    {
      zodiac_name: 'Leo',
      start_month: 'July',
      start_day: 23,
      end_month: 'August',
      end_day: 22,
    },
    {
      zodiac_name: 'Virgo',
      start_month: 'August',
      start_day: 23,
      end_month: 'September',
      end_day: 22,
    },
    {
      zodiac_name: 'Libra',
      start_month: 'September',
      start_day: 23,
      end_month: 'October',
      end_day: 22,
    },
    {
      zodiac_name: 'Scorpio',
      start_month: 'October',
      start_day: 23,
      end_month: 'November',
      end_day: 21,
    },
    {
      zodiac_name: 'Sagittarius',
      start_month: 'November',
      start_day: 22,
      end_month: 'December',
      end_day: 21,
    },
    {
      zodiac_name: 'Aries',
      start_month: 'March',
      start_day: 21,
      end_month: 'April',
      end_day: 19,
    },
    {
      zodiac_name: 'Aquarius',
      start_month: 'January',
      start_day: 20,
      end_month: 'February',
      end_day: 18,
    },
    {
      zodiac_name: 'Pisces',
      start_month: 'February',
      start_day: 19,
      end_month: 'March',
      end_day: 20,
    }      
  ];

  function show_zodiac_image(zodiac_name)
  {
    const zodiac_image =
    {
      Capricorn: 'capricorn.png',
      Taurus: 'taurus.png',
      Gemini: 'gemini.png',
      Cancer: 'cancer.png',
      Leo: 'leo.png',
      Virgo: 'virgo.png',
      Libra: 'libra.png',
      Scorpio: 'scorpio.png',
      Sagittarius: 'sagittarius.png',
      Aries: 'aries.png',
      Aquarius: 'aquarius.png',
      Pisces: 'pisces.png'
    }
      return zodiac_image[zodiac_name];
  };

  function play_zodiac_sound(zodiac_name)
  {
    const zodiac_sound =
    {
      Capricorn: 'capricorn.mp3',
      Taurus: 'taurus.mp3',
      Gemini: 'gemini.mp3',
      Cancer: 'cancer.mp3',
      Leo: 'leo.mp3',
      Virgo: 'virgo.mp3',
      Libra: 'libra.mp3',
      Scorpio: 'scorpio.mp3',
      Sagittarius: 'sagittarius.mp3',
      Aries: 'aries.mp3',
      Aquarius: 'aquarius.mp3',
      Pisces: 'pisces.mp3'
    }
      return zodiac_sound[zodiac_name];

  }

  function zodiac_text_description(zodiac_name)
  {
    const zodiac_description =
    {
      Capricorn: 'Capricorns are known for their discipline and practicality.',
      Taurus: 'Taurus individuals are reliable and patient.',
      Gemini: 'Geminis are adaptable and outgoing.',
      Cancer: 'Cancers are intuitive and compassionate.',
      Leo: 'Leos are confident and charismatic.',
      Virgo: 'Virgos are analytical and detail-oriented.',
      Libra: 'Libras are diplomatic and fair-minded.',
      Scorpio: 'Scorpios are passionate and resourceful.',
      Sagittarius: 'Sagittarians are adventurous and optimistic.',
      Aries: 'Aries individuals are energetic and courageous.',
      Aquarius: 'Aquarians are innovative and independent.',
      Pisces: 'Pisces are empathetic and artistic.'
  }
  return zodiac_description[zodiac_name];
  }

  function get_zodiac_sign(month, day)
  {
    console.log(get_zodiac_sign(Febreuary, 12));
  }
  
  function open_help()

  function reset_inputs()







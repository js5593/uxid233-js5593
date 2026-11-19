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
      zodiac_catbreed: 'Scottish Fold',
      zodiac_sound: 'audio/capricorn.mp3',
      zodiac_image: 'images/capricorn.jpg',
      zodiac_text_description: 'Diligent, pragmatic, disciplined, and low-key hilarious workers.',
    },

    {
      zodiac_name: 'Taurus',
      start_month: 4,
      start_day: 20,
      end_month: 5,
      end_day: 20,
      zodiac_catbreed: 'Persian',
      zodiac_sound: 'audio/taurus.mp3',
      zodiac_image: 'images/taurus.jpg',
      zodiac_text_description:'Cozy, food-motivated, luxury-loving couch potatoes who hate sudden changes in their routine.',
    },

    {
      zodiac_name: 'Gemini',
      start_month: 5,
      start_day: 21,
      end_month: 6,
      end_day: 20,
      zodiac_catbreed: 'Siamese',
      zodiac_sound: 'audio/gemini.mp3',
      zodiac_image: 'images/gemini.jpg',
      zodiac_text_description:'Chatty, clever, curious, and mischievous tricksters who love to communicate and investigate everything.',
    },

    {
      zodiac_name: 'Cancer',
      start_month: 6,
      start_day: 21,
      end_month: 7,
      end_day: 22,
      zodiac_catbreed: 'Sphynx',
      zodiac_sound: 'audio/cancer.mp3',
      zodiac_image: 'images/cancer.jpg',
      zodiac_text_description:'Sensitive, affectionate, velcro-like lap cats who crave cuddles and a loving home.',
    },
    
    {
      zodiac_name: 'Leo',
      start_month: 7,
      start_day: 23,
      end_month: 8,
      end_day: 22,
      zodiac_catbreed: 'Maine Coon',
      zodiac_sound: 'audio/leo.mp3',
      zodiac_image: 'images/leo.jpg',
      zodiac_text_description:'Regal, confident divas with big energy who rule the household and demand daily applause.',
    },
    {
      zodiac_name: 'Virgo',
      start_month: 8,
      start_day: 23,
      end_month: 9,
      end_day: 22,
      zodiac_catbreed: 'Russian Blue',
      zodiac_sound: 'audio/virgo.mp3',
      zodiac_image: 'images/virgo.jpg',
      zodiac_text_description:'Sleek, observant, hyper-clean perfectionists who judge your habits before warming up.',
    },
    {
      zodiac_name: 'Libra',
      start_month: 9,
      start_day: 23,
      end_month: 10,
      end_day: 22,
      zodiac_catbreed: 'Ragdoll',
      zodiac_sound: 'audio/.libra.mp3',
      zodiac_image: 'images/libra.jpg',
      zodiac_text_description:'Charming, social-butterfly peacemakers who adore beauty, balance, and harmony.',
    },
    {
      zodiac_name: 'Scorpio',
      start_month: 10,
      start_day: 23,
      end_month: 11,
      end_day: 21,
      zodiac_catbreed: 'Egypitian Mau',
      zodiac_sound: 'audio/scorpio.mp3',
      zodiac_image: 'images/scorpio.jpg',
      zodiac_text_description:'Mysterious, intense, magnetic, and fiercely loyal homebodies with a secret side.',
    },
    {
      zodiac_name: 'Sagittarius',
      start_month: 11,
      start_day: 22,
      end_month: 12,
      end_day: 21,
      zodiac_catbreed: 'Abyssinian',
      zodiac_sound: 'audio/sagittarius.mp3',
      zodiac_image: 'images/sagittarius.jpg',
      zodiac_text_description:'Free-spirited, wild, playful explorers known as the clowns of the cat world.',
    },
    {
      zodiac_name: 'Aries',
      start_month: 3,
      start_day: 21,
      end_month: 4,
      end_day: 19,
      zodiac_catbreed: 'Bengal',
      zodiac_sound: 'audio/aries.mp3',
      zodiac_image: 'images/aries.jpg',
      zodiac_text_description:'High-energy, bold, impulsive, and constantly running zoomies with zero off-button.',
    },
    {
      zodiac_name: 'Aquarius',
      start_month: 1,
      start_day: 20,
      end_month: 2,
      end_day: 18,
      zodiac_catbreed: 'Burmese',
      zodiac_sound: 'audio/aquarius.mp3',
      zodiac_image: 'images/aquarius.jpg',
      zodiac_text_description:'Unconventional, quirky, and proudly eccentric pathfinders who march to their own beat.',
    },
    {
      zodiac_name: 'Pisces',
      start_month: 2,
      start_day: 19,
      end_month: 3,
      end_day: 20,
      zodiac_catbreed: 'Turkish Angora',
      zodiac_sound:'auido/pisces.mp3',
      zodiac_image: 'images/pisces.jpg',
      zodiac_text_description:'Dreamy, intuitive, empathetic soft souls who offer quiet emotional comfort.',
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

function get_zodiac_catbreed(date_month, date_get){
  for (const zodiac_profile of zodiac_profiles){    if (date_month===zodiac_profile.start_month && date_get>= zodiac_profile.start_day || date_month===zodiac_profile.end_month && date_get<=zodiac_profile.end_day);
 
    
   {
  return zodiac_profile.zodiac_catbreed;
 }
}
  return null;
};  

// for (const kitty of zodiac_profiles){
//  console.log(zodiac_profiles.zodiac_catbreed);
//  if (output){
//   const my_list = document.createElement('li')
//   my_list.textContent = kitty.zodiac_catbreed
//   output.append(my_list)
//  } else {
//   console.log('output DOES NOT exist')
//  }





function get_catbreed(month_get, date_get){
  for (const zodiac_profile of zodiac_profiles){
    const start_m_d = (month_get === zodiac_profile.start_month && date_get >= zodiac_profile.start_day);
    const end_m_d = (month_get === zodiac_profile.end_month && date_get <= zodiac_profile.end_day);
      if (start_m_d || end_m_d){
        return zodiac_profile.zodiac_catbreed;
      }
    }
    return null;
  };


function get_description(month_get, date_get){
  for (const zodiac_profile of zodiac_profiles){
    const start_m_d = (month_get === zodiac_profile.start_month && date_get >= zodiac_profile.start_day);
    const end_m_d = (month_get === zodiac_profile.end_month && date_get <= zodiac_profile.end_day);
      if (start_m_d || end_m_d){
        return zodiac_profile.zodiac_text_description;
      }
    }
    return null;
  };



function get_image(month_get, date_get){
  for (const zodiac_profile of zodiac_profiles){
    const start_m_d = (month_get === zodiac_profile.start_month && date_get >= zodiac_profile.start_day);
    const end_m_d = (month_get === zodiac_profile.end_month && date_get <= zodiac_profile.end_day);
      if (start_m_d || end_m_d){
        return zodiac_profile.zodiac_image;
      }
  }
  return null;
};  

/*AI was used to help combine image display for both buttons and get audio to connect to the show results*/
let current_audio = null;

function stop_all_sounds() {
  if (current_audio) {
    current_audio.pause();
    current_audio.currentTime = 0;
  }
}



function show_result(profile) {
  if (!profile) return;
  output.textContent = `Your zodiac sign is ${profile.zodiac_name} and your cat breed is ${profile.zodiac_catbreed}. Personality: ${profile.zodiac_text_description}`;
  img_element.src = profile.zodiac_image;
  img_element.alt = `${profile.zodiac_catbreed} cat`;
  
  play_zodiac_sound(profile.zodiac_sound);
}

const output = document.querySelector('#output');
const button = document.querySelector('#submit');
const date_input = document.querySelector('#birthday');
const img_element = document.getElementById('zodiac-img');
const buttons_container = document.querySelector('#button-container');


button.addEventListener('click', function(){
  const selected_date = new Date(date_input.value);
  const date_get = selected_date.getDate() + 1;
  const month_get = selected_date.getMonth() + 1;
  const zodiac_sign = get_zodiac_sign(month_get, date_get);
  const zodiac_catbreed = get_catbreed(month_get, date_get);
  const zodiac_text_description = get_description(month_get, date_get);
  const zodiac_img = get_image(month_get, date_get);
  output.textContent = `Your zodiac sign is ${zodiac_sign} and your cat breed is ${zodiac_catbreed}. Personality: ${zodiac_text_description}`;

  img_element.src = zodiac_img;
  img_element.alt = `${zodiac_catbreed} cat`;
});




zodiac_profiles.forEach(profile => {
  const btn = document.createElement('button');
  btn.textContent = profile.zodiac_name;
  
  btn.addEventListener('click', () => {
    show_result(profile);
  });

  buttons_container.appendChild(btn);
});

const all_sounds = [];
for (const zodiac_sign of zodiac_signs){ 
  const audio = new Audio(zodiac_profiles.zodiac_sound)

  zodiac_profiles.zodiac_sound = audio;
  all_sounds.push(audio);
}
const audio_files = [];
const play_button = document.querySelector('#play');
const pause_button = document.querySelector('#pause');



const audio= new Audio('audio/aquarius.mp3');



function stop_all_sounds(){
  for (const audio of all_sounds)
  {
    audio.pause();
    audio.currentTime = 0;
  }
}; 
function play_zodiac_sound(sound_path) {
  stop_all_sounds();
  if (!sound_path) return;
  current_audio = new Audio(sound_path);
  current_audio.play();
}

play_button.addEventListener ('click', () => {
  stop_all_sounds();
  audio.play();
});

pause_button.addEventListener ('click', () => {
  stop_all_sounds();
  audio.play();
});



console.log(zodiac_signs);
 console.log(get_zodiac_sign(11, 21));
 console.log(get_zodiac_sign(3,44));
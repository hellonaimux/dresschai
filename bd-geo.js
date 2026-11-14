/* Bangladesh: Division > District (Jela) > Thana / Upazila.
   Standard administrative list (8 divisions, 64 districts). Dhaka, Chattagram, Rajshahi, Khulna and Sylhet cities
   also list their metropolitan police thanas. Lists are sorted A-Z by the location menu. */
(function () {
  function L(s) { return s.split(',').map(function (x) { return x.trim(); }); }
  window.BD_GEO = {
    'Dhaka': {
      'Dhaka': L('Adabor,Airport,Badda,Banani,Bangshal,Bhashantek,Cantonment,Chawkbazar,Dakshinkhan,Darus Salam,Demra,Dhamrai,Dhanmondi,Dohar,Gendaria,Gulshan,Hatirjheel,Hazaribagh,Jatrabari,Kadamtali,Kafrul,Kalabagan,Keraniganj,Khilgaon,Khilkhet,Kotwali,Lalbagh,Mirpur,Mohammadpur,Motijheel,Mugda,Nawabganj,New Market,Pallabi,Paltan,Ramna,Rampura,Sabujbagh,Savar,Shah Ali,Shahbagh,Shahjahanpur,Sher-e-Bangla Nagar,Shyampur,Sutrapur,Tejgaon,Turag,Uttar Khan,Uttara East,Uttara West,Vatara,Wari'),
      'Faridpur': L('Alfadanga,Bhanga,Boalmari,Charbhadrasan,Faridpur Sadar,Madhukhali,Nagarkanda,Sadarpur,Saltha'),
      'Gazipur': L('Gazipur Sadar,Kaliakair,Kaliganj,Kapasia,Sreepur,Tongi'),
      'Gopalganj': L('Gopalganj Sadar,Kashiani,Kotalipara,Muksudpur,Tungipara'),
      'Kishoreganj': L('Austagram,Bajitpur,Bhairab,Hossainpur,Itna,Karimganj,Katiadi,Kishoreganj Sadar,Kuliarchar,Mithamain,Nikli,Pakundia,Tarail'),
      'Madaripur': L('Kalkini,Madaripur Sadar,Rajoir,Shibchar'),
      'Manikganj': L('Daulatpur,Ghior,Harirampur,Manikganj Sadar,Saturia,Shivalaya,Singair'),
      'Munshiganj': L('Gazaria,Lohajang,Munshiganj Sadar,Sirajdikhan,Sreenagar,Tongibari'),
      'Narayanganj': L('Araihazar,Bandar,Fatullah,Narayanganj Sadar,Rupganj,Siddhirganj,Sonargaon'),
      'Narsingdi': L('Belabo,Monohardi,Narsingdi Sadar,Palash,Raipura,Shibpur'),
      'Rajbari': L('Baliakandi,Goalanda,Kalukhali,Pangsha,Rajbari Sadar'),
      'Shariatpur': L('Bhedarganj,Damudya,Gosairhat,Naria,Shariatpur Sadar,Zajira'),
      'Tangail': L('Basail,Bhuapur,Delduar,Dhanbari,Ghatail,Gopalpur,Kalihati,Madhupur,Mirzapur,Nagarpur,Sakhipur,Tangail Sadar')
    },
    'Chattagram': {
      'Bandarban': L('Alikadam,Bandarban Sadar,Lama,Naikhongchhari,Rowangchhari,Ruma,Thanchi'),
      'Brahmanbaria': L('Akhaura,Ashuganj,Bancharampur,Bijoynagar,Brahmanbaria Sadar,Kasba,Nabinagar,Nasirnagar,Sarail'),
      'Chandpur': L('Chandpur Sadar,Faridganj,Haimchar,Haziganj,Kachua,Matlab Dakshin,Matlab Uttar,Shahrasti'),
      'Chattagram': L('Akbar Shah,Anwara,Bakalia,Bandar,Banshkhali,Bayazid Bostami,Boalkhali,Chandanaish,Chandgaon,Chawkbazar,Double Mooring,EPZ,Fatikchhari,Halishahar,Hathazari,Khulshi,Kotwali,Lohagara,Mirsharai,Pahartali,Panchlaish,Patenga,Patiya,Rangunia,Raozan,Sadarghat,Sandwip,Satkania,Sitakunda'),
      'Cumilla': L('Barura,Brahmanpara,Burichang,Chandina,Chauddagram,Cumilla Adarsha Sadar,Cumilla Sadar Dakshin,Daudkandi,Debidwar,Homna,Laksam,Lalmai,Meghna,Monohargonj,Muradnagar,Nangalkot,Titas'),
      "Cox's Bazar": L("Chakaria,Cox's Bazar Sadar,Eidgaon,Kutubdia,Maheshkhali,Pekua,Ramu,Teknaf,Ukhiya"),
      'Feni': L('Chhagalnaiya,Daganbhuiyan,Feni Sadar,Fulgazi,Parshuram,Sonagazi'),
      'Khagrachori': L('Dighinala,Guimara,Khagrachori Sadar,Lakshmichhari,Mahalchhari,Manikchhari,Matiranga,Panchhari,Ramgarh'),
      'Lakshmipur': L('Kamalnagar,Lakshmipur Sadar,Raipur,Ramganj,Ramgati'),
      'Noakhali': L('Begumganj,Chatkhil,Companiganj,Hatiya,Kabirhat,Noakhali Sadar,Senbagh,Sonaimuri,Subarnachar'),
      'Rangamati': L('Bagaichhari,Barkal,Belaichhari,Juraichhari,Kaptai,Kawkhali,Langadu,Naniarchar,Rajasthali,Rangamati Sadar')
    },
    'Rajshahi': {
      'Bogura': L('Adamdighi,Bogura Sadar,Dhunat,Dhupchanchia,Gabtali,Kahaloo,Nandigram,Sariakandi,Shajahanpur,Sherpur,Shibganj,Sonatala'),
      'Chapainawabganj': L('Bholahat,Gomastapur,Nachole,Nawabganj Sadar,Shibganj'),
      'Joypurhat': L('Akkelpur,Joypurhat Sadar,Kalai,Khetlal,Panchbibi'),
      'Naogaon': L('Atrai,Badalgachhi,Dhamoirhat,Manda,Mohadevpur,Naogaon Sadar,Niamatpur,Patnitala,Porsha,Raninagar,Sapahar'),
      'Natore': L('Bagatipara,Baraigram,Gurudaspur,Lalpur,Naldanga,Natore Sadar,Singra'),
      'Pabna': L('Atgharia,Bera,Bhangura,Chatmohar,Faridpur,Ishwardi,Pabna Sadar,Santhia,Sujanagar'),
      'Rajshahi': L('Bagha,Bagmara,Boalia,Charghat,Durgapur,Godagari,Mohanpur,Motihar,Paba,Puthia,Rajpara,Shah Makhdum,Tanore'),
      'Sirajganj': L('Belkuchi,Chauhali,Kamarkhanda,Kazipur,Raiganj,Shahjadpur,Sirajganj Sadar,Tarash,Ullahpara')
    },
    'Khulna': {
      'Bagerhat': L('Bagerhat Sadar,Chitalmari,Fakirhat,Kachua,Mollahat,Mongla,Morrelganj,Rampal,Sarankhola'),
      'Chuadanga': L('Alamdanga,Chuadanga Sadar,Damurhuda,Jibannagar'),
      'Jashore': L('Abhaynagar,Bagherpara,Chaugachha,Jashore Sadar,Jhikargachha,Keshabpur,Manirampur,Sharsha'),
      'Jhenaidah': L('Harinakunda,Jhenaidah Sadar,Kaliganj,Kotchandpur,Maheshpur,Shailkupa'),
      'Khulna': L('Aranghata,Batiaghata,Dacope,Daulatpur,Dighalia,Dumuria,Harintana,Khalishpur,Khan Jahan Ali,Kotwali,Koyra,Labanchara,Paikgachha,Phultala,Rupsha,Sonadanga,Terokhada'),
      'Kushtia': L('Bheramara,Daulatpur,Khoksa,Kumarkhali,Kushtia Sadar,Mirpur'),
      'Magura': L('Magura Sadar,Mohammadpur,Shalikha,Sreepur'),
      'Meherpur': L('Gangni,Meherpur Sadar,Mujibnagar'),
      'Narail': L('Kalia,Lohagara,Narail Sadar'),
      'Satkhira': L('Assasuni,Debhata,Kalaroa,Kaliganj,Satkhira Sadar,Shyamnagar,Tala')
    },
    'Barishal': {
      'Barguna': L('Amtali,Bamna,Barguna Sadar,Betagi,Patharghata,Taltali'),
      'Barishal': L('Agailjhara,Babuganj,Bakerganj,Banaripara,Barishal Sadar,Gournadi,Hizla,Mehendiganj,Muladi,Wazirpur'),
      'Bhola': L('Bhola Sadar,Burhanuddin,Char Fasson,Daulatkhan,Lalmohan,Manpura,Tazumuddin'),
      'Jhalokati': L('Jhalokati Sadar,Kathalia,Nalchity,Rajapur'),
      'Patuakhali': L('Bauphal,Dashmina,Dumki,Galachipa,Kalapara,Mirzaganj,Patuakhali Sadar,Rangabali'),
      'Pirojpur': L('Bhandaria,Kawkhali,Mathbaria,Nazirpur,Nesarabad,Pirojpur Sadar,Zianagar')
    },
    'Sylhet': {
      'Habiganj': L('Ajmiriganj,Bahubal,Baniachong,Chunarughat,Habiganj Sadar,Lakhai,Madhabpur,Nabiganj,Sayestaganj'),
      'Moulvibazar': L('Barlekha,Juri,Kamalganj,Kulaura,Moulvibazar Sadar,Rajnagar,Sreemangal'),
      'Sunamganj': L('Bishwamvarpur,Chhatak,Dakshin Sunamganj,Derai,Dharampasha,Dowarabazar,Jagannathpur,Jamalganj,Madhyanagar,Sullah,Sunamganj Sadar,Tahirpur'),
      'Sylhet': L('Airport,Balaganj,Beanibazar,Bishwanath,Companiganj,Dakshin Surma,Fenchuganj,Golapganj,Gowainghat,Jaintiapur,Jalalabad,Kanaighat,Kotwali,Moglabazar,Osmani Nagar,Shah Poran,Sylhet Sadar,Zakiganj')
    },
    'Rangpur': {
      'Dinajpur': L('Biral,Birampur,Birganj,Bochaganj,Chirirbandar,Dinajpur Sadar,Fulbari,Ghoraghat,Hakimpur,Kaharole,Khansama,Nawabganj,Parbatipur'),
      'Gaibandha': L('Fulchhari,Gaibandha Sadar,Gobindaganj,Palashbari,Sadullapur,Saghata,Sundarganj'),
      'Kurigram': L('Bhurungamari,Char Rajibpur,Chilmari,Kurigram Sadar,Nageshwari,Phulbari,Rajarhat,Raomari,Ulipur'),
      'Lalmonirhat': L('Aditmari,Hatibandha,Kaliganj,Lalmonirhat Sadar,Patgram'),
      'Nilphamari': L('Dimla,Domar,Jaldhaka,Kishoreganj,Nilphamari Sadar,Saidpur'),
      'Panchagarh': L('Atwari,Boda,Debiganj,Panchagarh Sadar,Tetulia'),
      'Rangpur': L('Badarganj,Gangachara,Kaunia,Mithapukur,Pirgachha,Pirganj,Rangpur Sadar,Taraganj'),
      'Thakurgaon': L('Baliadangi,Haripur,Pirganj,Ranisankail,Thakurgaon Sadar')
    },
    'Mymensingh': {
      'Jamalpur': L('Baksiganj,Dewanganj,Islampur,Jamalpur Sadar,Madarganj,Melandaha,Sarishabari'),
      'Mymensingh': L('Bhaluka,Dhobaura,Fulbaria,Gaffargaon,Gauripur,Haluaghat,Ishwarganj,Muktagachha,Mymensingh Sadar,Nandail,Phulpur,Tarakanda,Trishal'),
      'Netrokona': L('Atpara,Barhatta,Durgapur,Kalmakanda,Kendua,Khaliajuri,Madan,Mohanganj,Netrokona Sadar,Purbadhala'),
      'Sherpur': L('Jhenaigati,Nakla,Nalitabari,Sherpur Sadar,Sreebardi')
    }
  };
})();

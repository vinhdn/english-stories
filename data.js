// Danh sach video doc truyen tu kenh KidTimeStoryTime (kiem chung link: 95% qua YouTube oEmbed)
const VIDEOS = [
{
"t": "Fly Guy #15: Prince Fly Guy",
"id": "LI8R4u9F8Oo",
"s": "Fly Guy"
},
{
"t": "Fly Guy #14: Fly Guy’s Amazing Tricks",
"id": "SkcKfkyVN30",
"s": "Fly Guy"
},
{
"t": "Fly Guy #13: Fly Guy and the Frankenfly",
"id": "N-61YIkT0Mg",
"s": "Fly Guy"
},
{
"t": "Fly Guy #7: I Spy Fly Guy",
"id": "KrG3M_R0k-g",
"s": "Fly Guy"
},
{
"t": "Hombre Mosca y Frankenmosca (Fly Guy & Frankenfly) BILINGUAL BOOK READ ALOUD IN SPANISH & ENGLISH!",
"id": "58PMfFBGWgY",
"s": "Fly Guy"
},
{
"t": "Fly Guy #6: Hooray for Fly Guy!",
"id": "seCeCYjPbug",
"s": "Fly Guy"
},
{
"t": "Fly Guy #5: Fly High, Fly Guy!",
"id": "gb7y82pI5rA",
"s": "Fly Guy"
},
{
"t": "Fly Guy #3: Shoo, Fly Guy!",
"id": "iDJRJCaR1Q8",
"s": "Fly Guy"
},
{
"t": "Fly Guy #2: Super Fly Guy!",
"id": "tUzXi4obLTU",
"s": "Fly Guy"
},
{
"t": "A Pet for Fly Guy",
"id": "2VLJz7rqjzc",
"s": "Fly Guy"
},
{
"t": "Fly Guy #12: There’s A Fly Guy in My Soup",
"id": "aL_-PCO__pE",
"s": "Fly Guy"
},
{
"t": "Fly Guy #11: Ride, Fly Guy, Ride!",
"id": "onUnMOkdYdg",
"s": "Fly Guy"
},
{
"t": "Fly Guy #10: Fly Guy vs. The Flyswatter!",
"id": "XvXafiYD9bc",
"s": "Fly Guy"
},
{
"t": "Fly Guy #8: Fly Guy Meets Fly Girl",
"id": "uJkoVAOlUUM",
"s": "Fly Guy"
},
{
"t": "Fly Guy #9: Buzz Boy And Fly Guy",
"id": "MdTycQ6pSV4",
"s": "Fly Guy"
},
{
"t": "Fly Guy #4: There Was An Old Lady Who Swallowed FLY GUY",
"id": "XsqOkMfRSpY",
"s": "Fly Guy"
},
{
"t": "Fly Guy #1: Hi! Fly Guy",
"id": "nsei6emyifQ",
"s": "Fly Guy"
},
{
"t": "The Road Not Taken by Robert Frost | Poetry for Kids | Kids Books",
"id": "ySZflT2jG4Q",
"s": "Khác"
},
{
"t": "William Sheepspeare ~ shakespeare for kids ~ kids books",
"id": "ff2o3W2kOmc",
"s": "Khác"
},
{
"t": "The Sun is Kind of a Big Deal | science books for kids | STEM kids books",
"id": "aYX1F82hVaA",
"s": "Khác"
},
{
"t": "Children’s Book based on song What A Wonderful World ~ Kids Books | Earth Day for Kids",
"id": "tE5FanPLE-1",
"s": "Khác"
},
{
"t": "How To Track an Easter Bunny – Easter Story for Kids",
"id": "XPgFfaV-WYg",
"s": "Khác"
},
{
"t": "That Grand Easter Day | Easter Story for Kids",
"id": "DTDX43h0E-1",
"s": "Khác"
},
{
"t": "Don’t Push the Button! An Easter Surprise | Easter Story for Kids",
"id": "8oZRc1yeT7U",
"s": "Khác"
},
{
"t": "Bedtime Story Read Aloud | Mother Earth’s Lullaby (A Song for Endangered Animals)",
"id": "ZEjpAXKbA40",
"s": "Khác"
},
{
"t": "The Earth Gives More | Earth Day for Kids",
"id": "o-jiUj-XKZI",
"s": "Khác"
},
{
"t": "The Real Mother Goose | Nursery Rhymes for Kids",
"id": "X4yTj7twBoc",
"s": "Khác"
},
{
"t": "Coco Chanel, Little People BIG Dreams | Nonfiction Books for Kids",
"id": "d7668ven6-8",
"s": "Khác"
},
{
"t": "A Beautiful Day in the Neighborhood: The Poetry of Mister Rogers ~ poems for kids",
"id": "GLRxEmTt63o",
"s": "Khác"
},
{
"t": "KIDS BOOKS | The Bear Ate Your Sandwich – Bear Book",
"id": "guqLR8JPsME",
"s": "Khác"
},
{
"t": "There are No Bears in This Bakery – Bear Book",
"id": "O5RfdpJ1ayQ",
"s": "Khác"
},
{
"t": "The Lying King – A Children’s Book About Lying",
"id": "uK6x-xRVkyk",
"s": "Khác"
},
{
"t": "F is for Florida | Florida for kids | ABC Book",
"id": "sJBl5d1gKjA",
"s": "Khác"
},
{
"t": "Doug the Dinosaur Livestreams!",
"id": "BSouiHCeoeo",
"s": "Khác"
},
{
"t": "DUMBO Live Action Picture Book READ ALOUD | Disney Dumbo Book",
"id": "oxVKtzhF1Vk",
"s": "Disney"
},
{
"t": "Lumber Jills | Nonfiction Books for Kids Read Aloud | Women’s History Month",
"id": "zINHbiVkdxU",
"s": "Khác"
},
{
"t": "She Spoke | Nonfiction Books for Kids Read Aloud | Women’s History Month",
"id": "ihCAA0K0sXI",
"s": "Khác"
},
{
"t": "Fearless Mary (Mary Fields, American Stagecoach Driver) ~ women’s history for kids",
"id": "7y_6HGpo49M",
"s": "Khác"
},
{
"t": "The Tallest Tree House ~ fairytale stories",
"id": "bmVr308nC68",
"s": "Khác"
},
{
"t": "A Lady Has the Floor (Belva Lockwood Speaks for Women’s Rights) – Nonfiction Books for Kids",
"id": "HwwyVAzgaik",
"s": "Khác"
},
{
"t": "Be Bold! Be Brave! 11 Latinas Who Made U.S. History – Nonfiction Books for Kids",
"id": "J6bANmJaE74",
"s": "Khác"
},
{
"t": "How To Trap a Leprechaun ~ Saint Patrick’s Day for Kids",
"id": "CUp8iurcjv8",
"s": "Khác"
},
{
"t": "What If Everybody Did That? | Social Skills for Kids",
"id": "811dQ_OisK0",
"s": "Khác"
},
{
"t": "UNICORN (and Horse) – Unicorn Books for Kids",
"id": "HePnjIcseDc",
"s": "Khác"
},
{
"t": "Ella Fitzgerald – Women’s History Read Aloud for Kids",
"id": "WF74818GKJw",
"s": "Khác"
},
{
"t": "If DaVinci Painted A Dinosaur – Dinosaurs for Kids",
"id": "YzlUqCjzai0",
"s": "Khác"
},
{
"t": "Ninja Camp – Ninja Kids",
"id": "HEYn6rr4wgk",
"s": "Khác"
},
{
"t": "Frida Catlo | Art books for Kids",
"id": "tjxrkieyh0M",
"s": "Khác"
},
{
"t": "Georgia’s Terrific, Colorific Experiment – Stem Girls",
"id": "vpK16N0Huq0",
"s": "Khác"
},
{
"t": "Goodnight Lab | Bedtime Stories for Kids | a Scientific Goodnight Moon",
"id": "6x55Uao6ULg",
"s": "Khác"
},
{
"t": "Mary Had A Little Lab – Science Books for Kids",
"id": "ntymsqDP2xo",
"s": "Khác"
},
{
"t": "Scientist, Scientist, Who Do You See? – Science for Kids",
"id": "IusKEW_rIRI",
"s": "Khác"
},
{
"t": "Sweet Dreams, Sarah | Inventors for Kids",
"id": "F5t5tSkx3_o",
"s": "Khác"
},
{
"t": "The Story of Rap | Read Aloud | Rap for Kids",
"id": "5no7wfcgScE",
"s": "Khác"
},
{
"t": "Grace for President | How to Run for President | Presidents Day for Kids",
"id": "a2DUZpaLhfE",
"s": "Khác"
},
{
"t": "BOOK ~ a Magical Read Aloud for Kids",
"id": "KTQHvCEY2A0",
"s": "Khác"
},
{
"t": "Misunderstood Shark: Friends Don’t Eat Friends | Sharks for Kids | Kid Stories Funny",
"id": "2woejOHH5V8",
"s": "Khác"
},
{
"t": "Misunderstood Shark | Kid Stories Funny | Sharks for Kids",
"id": "IidBOiEn8FU",
"s": "Khác"
},
{
"t": "I Have a Dream | MLK for Kids",
"id": "Jf6osaOmH5c",
"s": "Khác"
},
{
"t": "Inventors Who Changed the World | Inventors for Kids",
"id": "ZFkC5tazHIM",
"s": "Khác"
},
{
"t": "In the Garden with Dr. Carver | Black History for Kids | George Washington Carver for Kids",
"id": "6-bcNcVX5aw",
"s": "Khác"
},
{
"t": "LOVE | Kids Books ~ Teaching Values",
"id": "TFvikxIePoE",
"s": "Khác"
},
{
"t": "Valensteins | Valentines for Kids",
"id": "jskWUSdYZXU",
"s": "Khác"
},
{
"t": "The Jester Has Lost His Jingle | Short Inspirational Stories",
"id": "ZZvBDNnID3E",
"s": "Khác"
},
{
"t": "Valentine’s Day is NOT for Witches ~ WITCH STORY for kids",
"id": "81kwta5ZtjQ",
"s": "Khác"
},
{
"t": "Night Night, Groot ~ MARVEL",
"id": "0kd4I1uTFW4",
"s": "Khác"
},
{
"t": "Dinosaur vs. The Potty | Dinosaur Books for Kids",
"id": "iWTtmx_6Yg0",
"s": "Khác"
},
{
"t": "Mulan’s Lunar New Year ~ kids books read aloud for Chinese New Year!",
"id": "4HEln73QQl0",
"s": "Khác"
},
{
"t": "GroundHug Day ~ Groundhog Day for Kids ~ Valentines for Kids",
"id": "zl95g5NvwpQ",
"s": "Khác"
},
{
"t": "Happy Face, Sad Face: All Kinds of Faces! ~ Videos for Kids",
"id": "iyCH5PfWImA",
"s": "Khác"
},
{
"t": "Little Face, Big Face: All Kinds of Wild Faces! ~ Baby Book",
"id": "AK2JRNboJxs",
"s": "Khác"
},
{
"t": "Dragons Get Colds Too | Dragon Book and funny",
"id": "uX0QbQqkz5o",
"s": "Khác"
},
{
"t": "Vampirina In The Snow ~ a Vampirina Ballerina",
"id": "xkj9BRGo2lo",
"s": "Khác"
},
{
"t": "I Bake It Like That! ~ “I Like It Like That” parody with Abuela Bear / KIDS VIDEOS for KIDS",
"id": "gWc1W9bmZuc",
"s": "Khác"
},
{
"t": "The Day I Lost My Superpowers",
"id": "gkv2UIfRjxY",
"s": "Khác"
},
{
"t": "Be A King: Dr. Martin Luther King Jr.’s Dream and You | MLK for Kids",
"id": "VrfptdK378g",
"s": "Khác"
},
{
"t": "This is My Book!",
"id": "chqfW6ufXIk",
"s": "Khác"
},
{
"t": "I Can Do Hard Things",
"id": "CF4kQfEVJLM",
"s": "Khác"
},
{
"t": "Norman’s Architecture Adventure ~ STEM + Bedtime Stories",
"id": "R6rVkVGo8-1",
"s": "Khác"
},
{
"t": "The Jungle Gym ~ Bedtime Stories",
"id": "LDmWQI-GA-1",
"s": "Khác"
},
{
"t": "The I Hate to Read Book ~ Bedtime Stories",
"id": "SFCa0pD48-1",
"s": "Khác"
},
{
"t": "Made for Me | Read Aloud | Kids Videos for Kids",
"id": "3qRENawa0-1",
"s": "Khác"
},
{
"t": "Baby’s First Bank Heist ~ funny kids videos for kids",
"id": "jN8X5FwrM-1",
"s": "Khác"
},
{
"t": "Lull-A-Bye Little One ~ Lullabies for sleep",
"id": "krnTvzuyc-1",
"s": "Khác"
},
{
"t": "It’s About Time ~ STEM",
"id": "yQMBSJhUCAs",
"s": "Khác"
},
{
"t": "Los Tres Reyes Magos ~ Bilingual Kids Books Read Aloud about Colors/Colores!",
"id": "pMBjtJ8uGkw",
"s": "Khác"
},
{
"t": "Squirrel’s New Year’s Resolution",
"id": "Ye8_Q-6qDIc",
"s": "Khác"
},
{
"t": "Engelmann The Footloose Christmas Spruce",
"id": "fopq_CRgAvA",
"s": "Khác"
},
{
"t": "It’s Christmas, David! By David Shannon | Christmas Book for Kids",
"id": "kXbgxZ7s_eM",
"s": "Khác"
},
{
"t": "Counting Birds – Reading for Kids (a STEM Christmas book!)",
"id": "08aceCeWwtQ",
"s": "Khác"
},
{
"t": "Mi Burrito Sabanero/My Little Donkey – Kids Book with Bilingual Christmas Song",
"id": "87T7VNMhYAo",
"s": "Khác"
},
{
"t": "Mary Poppins – Disney",
"id": "CVnpdvWR3nc",
"s": "Disney"
},
{
"t": "Silent Night ~ Christmas Song for Kids",
"id": "vKw2q5oghw0",
"s": "Khác"
},
{
"t": "Christmas is NOT for Witches ~ Witches for Kids | Funny Kids Video",
"id": "gS-_8nZB35w",
"s": "Khác"
},
{
"t": "We Don’t Eat Our Classmates | Dinosaurs for Kids",
"id": "xIgQOn6V36o",
"s": "Khác"
},
{
"t": "The (Silent) Noisy Night ~ Story Book",
"id": "z1WTeubux3o",
"s": "Khác"
},
{
"t": "Allegro ~ Musical Stories for Kids (great STEAM book, too!)",
"id": "9VpCJlTjuvc",
"s": "Khác"
},
{
"t": "Cookiesaurus Christmas ~ Dinosaur Books Read Out Loud for Kids",
"id": "XJeP33XJdfg",
"s": "Khác"
},
{
"t": "Mother Bruce ~ Bear Book",
"id": "AJV8TFmQbXs",
"s": "Khác"
},
{
"t": "Santa Bruce ~ popular NEW",
"id": "DCaL-GF1jqA",
"s": "Khác"
},
{
"t": "Santa is Coming to California ~ Christmas for",
"id": "qZfT3ama9P0",
"s": "Khác"
},
{
"t": "12 Little Elves Visit Texas – Christmas for",
"id": "gsWFAeJgZwE",
"s": "Khác"
},
{
"t": "Cub’s Wish ~ Bedtime Story",
"id": "fiiBc8lDFAU",
"s": "Khác"
},
{
"t": "KidTime StoryTime’s First Q AND A VIDEO for Kids! (+ a musical surprise 🎶)",
"id": "HpvbogbM-iM",
"s": "Khác"
},
{
"t": "Shmelf the Hanukkah Elf",
"id": "sjTpYChzY-U",
"s": "Khác"
},
{
"t": "Dancing Dreidels ~ books for kids",
"id": "AGVMqoI3-0A",
"s": "Khác"
},
{
"t": "Little Red Ruthie, A Hanukkah Tale",
"id": "rFPz-dDjfNs",
"s": "Khác"
},
{
"t": "THE DOT | Growth Mindset Children’s Book",
"id": "kzKHRO1HQB0",
"s": "Khác"
},
{
"t": "Arnold and Louis Gold Rush ~ books for kids about honesty and decency!",
"id": "G2I_sh67yxI",
"s": "Khác"
},
{
"t": "Listening with My Heart: A Story of Kindness & Self-Compassion",
"id": "Lawc3fwS0n8",
"s": "Khác"
},
{
"t": "Thank You, Sarah: The Woman Who Saved Thanksgiving ~ Reading for Kids!",
"id": "RzB-WEhDl54",
"s": "Khác"
},
{
"t": "Lizard from the Park ~ a Dinosaur",
"id": "TvHEi16GGss",
"s": "Khác"
},
{
"t": "Goodbye Autumn, Hello Winter ~ Winter Read Aloud for Kids!",
"id": "gDM7kyi5OOg",
"s": "Khác"
},
{
"t": "Duck for Turkey Day ~ Thanksgiving",
"id": "mq2otrRh3wE",
"s": "Khác"
},
{
"t": "Give Thanks for Each Day ~ Stories for Kids",
"id": "SXeMeKEsJIg",
"s": "Khác"
},
{
"t": "FangsGiving ~ A MONSTER Read Aloud for Kids!",
"id": "XBPmOfVOOOM",
"s": "Khác"
},
{
"t": "Captain LaPlank, The Perfect Pirate – Stories for Kids",
"id": "byRXqPbApxQ",
"s": "Khác"
},
{
"t": "The Girl Who Never Made Mistakes | a Growth Mindset Book for Kids",
"id": "JC_8TYUDth8",
"s": "Khác"
},
{
"t": "The Way I Act ~ Kids Books Read Aloud (a Common Core selection!)",
"id": "pjQq_V1pAkw",
"s": "Khác"
},
{
"t": "Story Time for Kids: FAIR IS FAIR",
"id": "8drU2xq6Q_o",
"s": "Khác"
},
{
"t": "Feminist Baby – Reading for Kids",
"id": "kVKlcLl7kt8",
"s": "Khác"
},
{
"t": "Wackiest White House Pets ~ Story Book",
"id": "fnqKJ6V-uoU",
"s": "Khác"
},
{
"t": "The Nutcracker and the Four Realms – Reading for Kids",
"id": "PWl0HuLtpMM",
"s": "Khác"
},
{
"t": "Happy Birthday, Mickey! ~ Mickey Mouse Read Aloud Stories",
"id": "nF_PjH25fU8",
"s": "Disney"
},
{
"t": "Animobiles … Animals on the MOOOve | Reading for Kids!",
"id": "HUUZFyhZxZ4",
"s": "Khác"
},
{
"t": "Animals Wear Hats",
"id": "BWCv-x1RGmY",
"s": "Khác"
},
{
"t": "Polly and Her Duck Costume ~ Reading for Kids!",
"id": "8xq89cbi_Y0",
"s": "Khác"
},
{
"t": "10 Little Monsters Visit New York City | Story Book for Kids",
"id": "jIyJW8ME9IQ",
"s": "Khác"
},
{
"t": "The Best Part About The Day of the Dead / Lo Mejor del Día de los Muertos | Bilingual Books for Kids",
"id": "pB_FDYAyQ4o",
"s": "Khác"
},
{
"t": "The Wheels on the…Uh-Oh | Bedtime Stories for Kids (SING ALONG!)",
"id": "pOtveTS0MjQ",
"s": "Khác"
},
{
"t": "The Spooky Wheels on the Bus | Sing-Along Books Read Aloud for Children!",
"id": "9WotjdZVrcw",
"s": "Khác"
},
{
"t": "The Nightmare Before Christmas | Books for Kids",
"id": "hZbCVFjrBco",
"s": "Khác"
},
{
"t": "Monster Musical Chairs",
"id": "QaMFSNQcfJk",
"s": "Khác"
},
{
"t": "This Is The House That Monsters Built | Reading for Kids!",
"id": "GKYHosNvlHs",
"s": "Khác"
},
{
"t": "Decibella and Her 6-Inch Voice | Child Story by Julia Cook",
"id": "MWl5MfjhGuE",
"s": "Khác"
},
{
"t": "Penguin and Pumpkin | Fall Stories for Kids!",
"id": "XlZ3P84Ca_Y",
"s": "Khác"
},
{
"t": "Trick Arrr Treat – Halloween Books for Kids (and Pirates!)",
"id": "AwoiwlK7yt0",
"s": "Khác"
},
{
"t": "Don’t Push the Button! A Halloween Treat – Books",
"id": "56o9z9Q7h-w",
"s": "Khác"
},
{
"t": "Maximillian Villainous – Books for Kids!",
"id": "MyztmFVYSXM",
"s": "Khác"
},
{
"t": "Read Aloud Stories | What Does It Mean to Be Kind?",
"id": "MRRdyoJhn2g",
"s": "Khác"
},
{
"t": "There’s a DINOSAUR on the 13th Floor | DINOSAUR BOOK FOR KIDS",
"id": "O7RbDalwiYA",
"s": "Khác"
},
{
"t": "Abuelo and the Three Bears – Stories for Kids Read Aloud (with a sprinkling of Spanish!)",
"id": "p6AhYxqsrTY",
"s": "Khác"
},
{
"t": "Bubble Gum Brain | Growth Mindset",
"id": "25vx-_uPYww",
"s": "Khác"
},
{
"t": "Race Car Dreams | Bedtime Stories for Kids!",
"id": "GAiYkN42owA",
"s": "Khác"
},
{
"t": "Fire Truck Dreams ~ Kids YouTube Bedtime Story",
"id": "fnwpyhiL3L0",
"s": "Khác"
},
{
"t": "BILINGUAL Book for Kids: How The Gods Created the Finger People | a Mayan fable",
"id": "BhRyWthukzc",
"s": "Khác"
},
{
"t": "What Can You Do with a Toolbox? A Book for Kids from HGTV’s Kitchen Cousins!",
"id": "UtsOwY-5VMI",
"s": "Khác"
},
{
"t": "Books for Kids: A Paintbrush for Paco (Read in English with a Dash of Spanish!)",
"id": "35OCmQb5n4c",
"s": "Khác"
},
{
"t": "Is It Sukkot Yet? Books",
"id": "pFbspYWC95U",
"s": "Khác"
},
{
"t": "Books for Kids: HOW TO TRICK THE TOOTH FAIRY",
"id": "H5fAFvWF0mE",
"s": "Khác"
},
{
"t": "Bilingual Book for Kids: LEONARD DISCOVERS CUBA/LEONARDO DESCUBRE CUBA",
"id": "6pNtDmKjpq4",
"s": "Khác"
},
{
"t": "Books for Kids Read Aloud: FOOD FIGHT FIESTA (A Tale About La Tomatina with a sprinkle of Spanish!)",
"id": "Ypvrvlom5JM",
"s": "Khác"
},
{
"t": "Disney Book For Kids: Mickey & Friends Super School Day!",
"id": "PhM3JUVnF3k",
"s": "Disney"
},
{
"t": "I Can’t Do That…YET! A Growth Mindset Book for Kids",
"id": "fwLiUCWCUrU",
"s": "Khác"
},
{
"t": "Books for Kids: Eppie the Elephant (who was allergic to peanuts)",
"id": "V8cYfXbYwQI",
"s": "Khác"
},
{
"t": "Fall Stories for Kids: WE’RE GOING ON A LEAF HUNT",
"id": "c5p-fuvUYBM",
"s": "Khác"
},
{
"t": "Goodbye Summer, Hello Autumn | a Fall Book for Kids",
"id": "VD0gSsiMhAQ",
"s": "Khác"
},
{
"t": "Kids Books Read Aloud: TEN MONKEY JAMBOREE",
"id": "oIbfmaL7WD8",
"s": "Khác"
},
{
"t": "Books Read Aloud for Children | 7 ATE 9 … The Untold Story!",
"id": "KBEsAIDsvqo",
"s": "Khác"
},
{
"t": "BOOKS FOR KIDS: The Hair of Zoe Fleefenbacher Goes to School",
"id": "rPx-nNiSebw",
"s": "Khác"
},
{
"t": "Back To School Kids Book: THE KISSING HAND",
"id": "p9hbZl-dQok",
"s": "Khác"
},
{
"t": "You Should, You Should! | Books for Kids",
"id": "EWe-a2xlN1E",
"s": "Khác"
},
{
"t": "Randall’s Ranky Day | A Very Cranky",
"id": "wZFaxvR-5OI",
"s": "Khác"
},
{
"t": "ON THE TRAIN (A Shine-A-Light Book)",
"id": "OT3zAYrwqR8",
"s": "Khác"
},
{
"t": "SPOT: A Sea Pup’s Survival Guide",
"id": "0aPFUAvFl5g",
"s": "Khác"
},
{
"t": "Willow the Water Bear",
"id": "Ypub-GtY-sk",
"s": "Khác"
},
{
"t": "MICKEY’S PERFECTO DAY! | Disney Kids Books Read Aloud! (from Mickey and the Roadster Racers)",
"id": "TV8ejMlb5Hc",
"s": "Disney"
},
{
"t": "The Magic Is In You | DISNEY Kids Books Read Aloud! (PERFECT for ALL Ages of DREAMERS!)",
"id": "oKHQRBnZAT4",
"s": "Disney"
},
{
"t": "Nanook & Pryce: Gone Fishing",
"id": "1DH3_1dL2os",
"s": "Khác"
},
{
"t": "Johnny Skip2, Amazing Adventures in Australia",
"id": "YA_JzDChVCQ",
"s": "Khác"
},
{
"t": "The Gift of Gift (from The Super Amazing Princess Heroes!)",
"id": "wwj3tFb-tew",
"s": "Khác"
},
{
"t": "The Super Duper Princess Heroes",
"id": "3cAFV5gmupk",
"s": "Khác"
},
{
"t": "Holly’s Day at the Pool",
"id": "6CypCJkSE2M",
"s": "Khác"
},
{
"t": "Part-Time Mermaid ~ Girl By Day…Mermaid By Night",
"id": "JXfJkFHQllU",
"s": "Khác"
},
{
"t": "God Bless America",
"id": "Npkarjiq_Xs",
"s": "Khác"
},
{
"t": "The Owl Goes on Holiday",
"id": "1b0Gq3wmFuQ",
"s": "Khác"
},
{
"t": "It’s Sandcastle Building Day!",
"id": "fTpqiuh1o5A",
"s": "Khác"
},
{
"t": "Black Panther | Superhero Kids Book Read Aloud! (World of Reading Level 1)",
"id": "R64hlpJiNNM",
"s": "Khác"
},
{
"t": "Disney’s INCREDIBLES II read-along StoryBook",
"id": "6hms9_NMCe4",
"s": "Disney"
},
{
"t": "Just Like My Papa",
"id": "IuLM-4ik6vk",
"s": "Khác"
},
{
"t": "The Tigers and the Exciting, Inviting Meal | Rhyming",
"id": "1d7O4uSzIO0",
"s": "Khác"
},
{
"t": "Penguin On Vacation",
"id": "0zCjB6EXuio",
"s": "Khác"
},
{
"t": "Tree House in a Storm | a Book For Kids about Hurricane Survival!",
"id": "YZqsQji-Jpo",
"s": "Khác"
},
{
"t": "Pink Is For Boys",
"id": "2RIb9ILFlRk",
"s": "Khác"
},
{
"t": "ABC Song: AlphaRAP! Musical Kids Videos",
"id": "xbB93bFaxrk",
"s": "Khác"
},
{
"t": "Wild Wild Weasel",
"id": "Mbjq0Ev8fAI",
"s": "Khác"
},
{
"t": "Gazpacho for Nacho | Kids Books Read Aloud! (In English with a sprinkling of Spanish!)",
"id": "H-IhjNW64e4",
"s": "Khác"
},
{
"t": "A Mexican Food Alphabet Book: Todos A Comer! | BILINGUAL",
"id": "YMn8gDWbQgg",
"s": "Khác"
},
{
"t": "The Life of SELENA ~ La Vida de SELENA | Bilingual",
"id": "ivcRZGQbr8k",
"s": "Khác"
},
{
"t": "Mommy Bunny Loves Me Best",
"id": "KGSW5ilufj4",
"s": "Khác"
},
{
"t": "ME and my Fluffy MOM",
"id": "7lMJzZo4jZI",
"s": "Khác"
},
{
"t": "Play Ball! by Jorge Posada | Baseball",
"id": "0OGjLn0OSUk",
"s": "Khác"
},
{
"t": "The Water Dragon (A Chinese Legend)",
"id": "TakD_hf6Cc0",
"s": "Khác"
},
{
"t": "Pan de Sal Saves the Day | A Filipino Kids Books READ ALOUD! (in English w/Tagalog text, too!)",
"id": "foQYHPh7S4o",
"s": "Khác"
},
{
"t": "Manjhi Moves A Mountain | Kids Books READ ALOUD! (Fantastic South Asian Heritage selection!)",
"id": "Ij-G2y_IOqU",
"s": "Khác"
},
{
"t": "PARIS Up, Up and Away",
"id": "wUm2yAOCXWo",
"s": "Khác"
},
{
"t": "A Lion in Paris",
"id": "pJbM6xKbceU",
"s": "Khác"
},
{
"t": "Mr. Ferris and His Wheel",
"id": "BW24KxxLaTY",
"s": "Khác"
},
{
"t": "SHIMMER: Songs of Night | Kids Book of Poems READ ALOUD! (Poems for Kids)",
"id": "qb04zZI83U4",
"s": "Khác"
},
{
"t": "The Adventures of Jumperoo Joey: Big Blue Sky",
"id": "cPC0goT0S0M",
"s": "Khác"
},
{
"t": "The Adventures of Jumperoo Joey: Forever Friends",
"id": "a1Vnz6NnIUc",
"s": "Khác"
},
{
"t": "Sorcerer’s Apprentice | A Classic Mickey Mouse",
"id": "WDuBvjsh6ew",
"s": "Disney"
},
{
"t": "Cock-a-Doodle Oops! | Kids Book Read Aloud/Crowed Aloud!!!",
"id": "72rbwEr9tJo",
"s": "Khác"
},
{
"t": "Don’t Turn the Page!",
"id": "jj6qt1qXJsM",
"s": "Khác"
},
{
"t": "The Story of Saint Patrick",
"id": "qQGs3vwmM08",
"s": "Khác"
},
{
"t": "WRITE ON, MERCY! The Secret Life of Mercy Otis Warren",
"id": "1nvGul9rf28",
"s": "Khác"
},
{
"t": "AUDREY HEPBURN (Little People, Big Dreams Series)",
"id": "zMNhe3nt4nc",
"s": "Khác"
},
{
"t": "The Snowbear",
"id": "vvIsLvdIUTg",
"s": "Khác"
},
{
"t": "Winter Candle",
"id": "muMzzQOFTIA",
"s": "Khác"
},
{
"t": "100 Days of Cool (A Mathstart Story)",
"id": "26HyepOPpuo",
"s": "Khác"
},
{
"t": "Ella, Queen of Jazz (featuring Marilyn Monroe!)",
"id": "O4aGB3KcNx8",
"s": "Khác"
},
{
"t": "Young, Gifted and Black | Kids Books READ ALOUD! Perfect for Black History Month!",
"id": "npLgvYFx32g",
"s": "Khác"
},
{
"t": "Lincoln & Grace: Why Abraham Lincoln Grew A Beard",
"id": "BAb1KN8pPdY",
"s": "Khác"
},
{
"t": "Penguin In Love",
"id": "b-E1hktlKP8",
"s": "Khác"
},
{
"t": "ABC LOVE | Kids Books Read Aloud to Learn the Alphabet!",
"id": "DDDZjG7odoE",
"s": "Khác"
},
{
"t": "She Loved Baseball…The Effa Manley Story",
"id": "Z2iGp35qEjU",
"s": "Khác"
},
{
"t": "Stealing Home: Jackie Robinson Against the Odds",
"id": "Yeys2RwVMas",
"s": "Khác"
},
{
"t": "Story of Groundhog’s Day Off for Groundhog’s Day",
"id": "DoMZXkf19VU",
"s": "Khác"
},
{
"t": "American Slave, American Hero: York of the Lewis & Clark Expedition",
"id": "NQtTho1meu0",
"s": "Khác"
},
{
"t": "KIDS MOVIE: THE GREAT COOKIE CAPER! Videos for Kids",
"id": "uRr6TNE64Nw",
"s": "Khác"
},
{
"t": "The Adventures of Gracie & Monkeybear ~ Book 2: Winter",
"id": "fDGld8VxcKc",
"s": "Khác"
},
{
"t": "Daddy Lost His Job",
"id": "4X9l8OBPEMU",
"s": "Khác"
},
{
"t": "Extremely Cute Animals Operating Heavy Machinery",
"id": "9MCG-iItwkA",
"s": "Khác"
},
{
"t": "Let’s Celebrate Martin Luther King, Jr. Day",
"id": "IPdKODOncIE",
"s": "Khác"
},
{
"t": "ABC Spanish | Kids Books READ ALOUD! (A Bilingual Alphabet Book!)",
"id": "C8aZ_9dQxzU",
"s": "Khác"
},
{
"t": "ABC Color (Exploring Exotic Colors!)",
"id": "C3oRSChzNek",
"s": "Khác"
},
{
"t": "Miguel and the Grand Harmony | Kids Books READ ALOUD! (Book inspired by Disney Pixar’s Coco)",
"id": "2DwRhNGJMgs",
"s": "Disney"
},
{
"t": "Miguel y la gran armonía READ ALOUD! (Inspirada por la película Coco)",
"id": "UNFLKkeCc58",
"s": "Khác"
},
{
"t": "The Teachers’ Night Before Christmas",
"id": "6AdOMgfiQHE",
"s": "Khác"
},
{
"t": "The Sound of Music’s DO RE MI (READ AND SUNG ALOUD for KIDS!)",
"id": "JLQrboG7_RQ",
"s": "Khác"
},
{
"t": "The Sound of Music’s MY FAVORITE THINGS | Kids Book Read & Sung Aloud",
"id": "ZISCtd9eDQE",
"s": "Khác"
},
{
"t": "The Story Orchestra: The Nutcracker",
"id": "2Ey8EvfWD7k",
"s": "Khác"
},
{
"t": "White Christmas of a Looong Dog",
"id": "30trkH70Ul4",
"s": "Khác"
},
{
"t": "Don’t Push the Button! A Christmas Adventure",
"id": "A0RxJMXju7w",
"s": "Khác"
},
{
"t": "Don’t Touch This Book!",
"id": "XxLhXisQt0Y",
"s": "Khác"
},
{
"t": "Walter and the Wallet",
"id": "r_ZoLJLKWg0",
"s": "Khác"
},
{
"t": "Ralphie, Always Loved",
"id": "QBO0UtpV7zE",
"s": "Khác"
},
{
"t": "I Have Two Homes | Kids Book READ ALOUD (Divorce & Kids)",
"id": "LtRHxh0ykIw",
"s": "Khác"
},
{
"t": "Sixteen Runaway Pumpkins",
"id": "pBgndg1qqwA",
"s": "Khác"
},
{
"t": "Rodeo Time READ ALOUD! (MathStart Level 3 – Reading A Schedule)",
"id": "i6Xoo6z7InM",
"s": "Khác"
},
{
"t": "Jalapeño Bagels",
"id": "aNgAzq9iLuQ",
"s": "Khác"
},
{
"t": "Goodbye, Havana! Hola, New York! BOOKS FOR KIDS",
"id": "F8nNFEs0hOQ",
"s": "Khác"
},
{
"t": "Walt Disney (a mini biography)",
"id": "WUGwSKKUA7M",
"s": "Disney"
},
{
"t": "Davy Crockett A Life on the Frontier",
"id": "Ydmeeox417U",
"s": "Khác"
},
{
"t": "Ben Franklin’s Big Splash: the mostly true story of his 1st invention",
"id": "1ac098781ak",
"s": "Khác"
},
{
"t": "Thomas Jefferson Builds a Library",
"id": "5-_hbF_SqhU",
"s": "Khác"
},
{
"t": "Frida Kahlo (Little People, Big Dreams series) | Nonfiction books for kids",
"id": "N7y3kbZEfCc",
"s": "Khác"
},
{
"t": "REVIEW: Weird But True Daily Planner from National Geographic Kids",
"id": "46oxU9MdCp0",
"s": "Khác"
},
{
"t": "REVIEW: National Geographic Kids UNITED STATES ATLAS!",
"id": "alnq5eM3R_0",
"s": "Khác"
},
{
"t": "Wednesday (A Children’s Book)",
"id": "9sgtLN6_duU",
"s": "Khác"
},
{
"t": "Tuesday (A Children’s Book)",
"id": "Gv43ibRtNn4",
"s": "Khác"
},
{
"t": "Monday (A Children’s Book)",
"id": "0X73maoJtS0",
"s": "Khác"
},
{
"t": "Do NOT Bring Your Dragon to the Library | Dragon Books",
"id": "DnzZJVztPhU",
"s": "Khác"
},
{
"t": "Cedric and the Dragon | DRAGON BOOKS",
"id": "lSJTCtaJknA",
"s": "Khác"
},
{
"t": "Kylie Kangaroo’s Karate Kickers (Animal Antics A to Z)",
"id": "ucxjrrFo9lU",
"s": "Khác"
},
{
"t": "How Tom Beat Captain Najork and His Hired Sportsmen | FUNNY",
"id": "nfGW2CqivAk",
"s": "Khác"
},
{
"t": "Labor Day for Kids | BOOKS",
"id": "I0ZBjHhmNjo",
"s": "Khác"
},
{
"t": "Energy from the Sun (Rookie Read-About Science)",
"id": "wBs3GIaAWek",
"s": "Khác"
},
{
"t": "Red Riding Hood Meets the Three Bears",
"id": "4299hTuu0Ng",
"s": "Khác"
},
{
"t": "Three Blind Mice Team Up with the Three Little Pigs – Books for Kids",
"id": "R43pgUGE0Tw",
"s": "Khác"
},
{
"t": "Sleeping Beauty (with “Guest Reader”/Interrupter Maleficent)",
"id": "lZSHS9P8LR0",
"s": "Khác"
},
{
"t": "The Princess Who Had No Kingdom",
"id": "APdbltQQqYY",
"s": "Khác"
},
{
"t": "The Adventures of Gracie & Monkeybear ~ Book 1: Summer",
"id": "jxMtylQ-tj8",
"s": "Khác"
},
{
"t": "It’s A Firefly Night",
"id": "xA3feOjuH7w",
"s": "Khác"
},
{
"t": "It’s a Seashell Day",
"id": "RY4WcNfHU3c",
"s": "Khác"
},
{
"t": "The Best Vacation Ever (a MathStart story)",
"id": "IjOway5VuqM",
"s": "Khác"
},
{
"t": "Super Sand Castle Saturday (a MathStart story)",
"id": "y2ZhbdRAD1A",
"s": "Khác"
},
{
"t": "I Am Yoga | RELAXING",
"id": "i2i3RK22BsI",
"s": "Khác"
},
{
"t": "Good Night Yoga (a pose-by-pose bedtime story)",
"id": "CMyz6TMMEzs",
"s": "Khác"
},
{
"t": "Chester Raccoon and the ALMOST Perfect Sleepover (a Kissing Hand book)",
"id": "BP5a1YxuJ1E",
"s": "Khác"
},
{
"t": "Noah’s Invisible Adventures",
"id": "RamYC3GWU2M",
"s": "Khác"
},
{
"t": "There Was A Speech Teacher Who Swallowed Some Dice",
"id": "f6zd59wrUZA",
"s": "Khác"
},
{
"t": "A Father’S Day Thank You (Kids Book Read Aloud!)",
"id": "JicdG1hfq9g",
"s": "Khác"
},
{
"t": "My Dad is Big and Strong BUT…. [a bedtime story]",
"id": "j3XnLcYs5RY",
"s": "Khác"
},
{
"t": "My Dad at the Zoo",
"id": "oO6IfUfS4wo",
"s": "Khác"
},
{
"t": "If I Had a Dragon / Si Yo Tuviera Un Dragon (Spanish/English Bilingual Book) Dragon Book",
"id": "lFMnmdPqVn8",
"s": "Khác"
},
{
"t": "Esteban de Luna, Baby Rescuer!/Rescatador de Bebés! (A BILINGUAL READ ALOUD!)",
"id": "BrFfPioX4_o",
"s": "Khác"
},
{
"t": "The Barking Mouse READ ALOUD! (In English with a sprinkle of easy Spanish!)",
"id": "nKeeomKD9QI",
"s": "Khác"
},
{
"t": "Sunflowers Measure Up! (a Hello Math Reader about Measurements)",
"id": "vVaSEU8bUJU",
"s": "Khác"
},
{
"t": "Cats Add Up! (Hello Reader Math Series)",
"id": "UHwgrvs2D4g",
"s": "Khác"
},
{
"t": "Bart’s Amazing Charts (Hello Math Reader)",
"id": "6NF8elv8Cew",
"s": "Khác"
},
{
"t": "Am I Weird? Children’S Book",
"id": "GKrQWLITSDs",
"s": "Khác"
},
{
"t": "Bully",
"id": "S1zcvg5-qkA",
"s": "Khác"
},
{
"t": "I Want To Be A Reader",
"id": "FJQlJN15dFc",
"s": "Khác"
},
{
"t": "I Want To Be A Drummer",
"id": "5OBJi_XzFWk",
"s": "Khác"
},
{
"t": "The Big Green Pocketbook",
"id": "Wng3lAS8lQg",
"s": "Khác"
},
{
"t": "A Taco for El Presidente",
"id": "smlD0HXYoGY",
"s": "Khác"
},
{
"t": "Don’t Push the Button!",
"id": "ZMyh-DMzEho",
"s": "Khác"
},
{
"t": "A Bad Case of Stripes | Kids Books READ ALOUD for Children!",
"id": "amdqyAvfVUY",
"s": "Khác"
},
{
"t": "The Nine Lives of Rotten Ralph",
"id": "gLWSSn1D2T4",
"s": "Khác"
},
{
"t": "Giraffes Can’t Dance READ ALOUD | Growth Mindset Books for Kids",
"id": "MXeKv1-wj_o",
"s": "Khác"
},
{
"t": "The Mice of Bistrot des Sept Freres READ ALOUD (A story in English with a touch of French!)",
"id": "FJf-DaMatIY",
"s": "Khác"
},
{
"t": "The True Tale of Johnny Appleseed",
"id": "9gmiLXl1mzo",
"s": "Khác"
},
{
"t": "Earth Day, Hooray! (a MathStart book)",
"id": "JhhtqHDAIm8",
"s": "Khác"
},
{
"t": "Max Celebrates Cinco de Mayo",
"id": "fXShXVgBlR0",
"s": "Khác"
},
{
"t": "It’s Easter, Chloe Zoe! | Kids Book READ ALOUD for Easter!",
"id": "ucQCRSB7B_4",
"s": "Khác"
},
{
"t": "Is It Passover Yet?",
"id": "q-V_GyVDRgw",
"s": "Khác"
},
{
"t": "The Argyle Fox",
"id": "xbKeE2prK_o",
"s": "Khác"
},
{
"t": "Sugar on Snow",
"id": "zk5myqh8T1s",
"s": "Khác"
},
{
"t": "Sun Above and Blooms Below (a springtime story)",
"id": "D49pS9tlLeU",
"s": "Khác"
},
{
"t": "April Foolishness | KID BOOK READ ALOUD for April Fools’ Day!",
"id": "riXK3qXS1WA",
"s": "Khác"
},
{
"t": "The Original Cowgirl (the Wild Adventures of Lucille Mulhall)",
"id": "1LV9rUvFbEg",
"s": "Khác"
},
{
"t": "Amelia Earhart (Little People, Big Dreams Series)",
"id": "IiCht-jZcMw",
"s": "Khác"
},
{
"t": "Maya Angelou (Little People, Big Dreams series)",
"id": "I9pRb_QhnwU",
"s": "Khác"
},
{
"t": "When Will It Snow?",
"id": "DsMKRGQNIhk",
"s": "Khác"
},
{
"t": "Ropa Sucia (Stinky Clothes) READ ALOUD IN SPANISH & ENGLISH!",
"id": "XpKGJVDHXHs",
"s": "Khác"
},
{
"t": "Este No Es Mi Conejito (That’s Not My Bunny) BILINGUAL",
"id": "5PhbgL7ldnM",
"s": "Khác"
},
{
"t": "What a Tantrum! Vaya rabieta! BILINGUAL",
"id": "pq8Ut_CEWYA",
"s": "Khác"
},
{
"t": "Shannon and the World’s Tallest Leprechaun | Kids Book Read Aloud for St. Patrick’s Day!",
"id": "SK-v1LaVCuU",
"s": "Khác"
},
{
"t": "Hot Dog! Eleanor Roosevelt Throws a Picnic",
"id": "IPGIHKcw_Gs",
"s": "Khác"
},
{
"t": "Malala Yousafzai, Warrior With Words | Malala Yousafzai Story",
"id": "HN-IMe-AgMo",
"s": "Khác"
},
{
"t": "KID MOVIE: LATE FOR SCHOOL | Movie for Kids",
"id": "OncyibH3IJM",
"s": "Khác"
},
{
"t": "Look Up! Henrietta Leavitt, Pioneering Woman Astronomer",
"id": "2wdWVVr6LTU",
"s": "Khác"
},
{
"t": "Astronaut Handbook",
"id": "VMvRxnmp1s8",
"s": "Khác"
},
{
"t": "How to Deal with Monsters: A Child’s Practical Guide",
"id": "CylJC6UQGv4",
"s": "Khác"
},
{
"t": "Monster Math",
"id": "SusXnpOYqDY",
"s": "Khác"
},
{
"t": "Rotten Island | MONSTER book for kids",
"id": "X2nUuJ-A4JY",
"s": "Khác"
},
{
"t": "Molly, By Golly! The Legend of Molly Williams, America’s First Female Firefighter",
"id": "f8JaGs0FSKs",
"s": "Khác"
},
{
"t": "If A Bus Could Talk: The Story of Rosa Parks | Rosa Parks for Kids",
"id": "XZmnbnXTjqo",
"s": "Khác"
},
{
"t": "Black, White, Just Right!",
"id": "h5gAJ7I-w-k",
"s": "Khác"
},
{
"t": "Grandmama’s Pride",
"id": "UapeGZiEJwA",
"s": "Khác"
},
{
"t": "The Case for Loving",
"id": "a8ur1SPDTgQ",
"s": "Khác"
},
{
"t": "An Apple for Harriet Tubman",
"id": "6j4gaNKhefY",
"s": "Khác"
},
{
"t": "Heart On Fire: Susan B. Anthony Votes for President",
"id": "JH12ucNqr5Q",
"s": "Khác"
},
{
"t": "Happy Valentine’s Day, Curious George!",
"id": "zG_J1xRPHD4",
"s": "Curious George"
},
{
"t": "The Story Of Substitute Groundhog for Groundhog Day",
"id": "JaBaTN8LW3U",
"s": "Khác"
},
{
"t": "Lincoln’s Gettysburg Address",
"id": "Aw3s5ZIOW-o",
"s": "Khác"
},
{
"t": "How Kate Warne Saved President Lincoln (1st Woman Detective) | nonfiction books for kids",
"id": "0emOAHuiYPE",
"s": "Khác"
},
{
"t": "Climbing Lincoln’s Steps: The African American Journey",
"id": "W1eOq2P906U",
"s": "Khác"
},
{
"t": "The Adventures of Big Sil: Phoenix, AZ (READ ALOUD!)",
"id": "r0csvFqeSMg",
"s": "Khác"
},
{
"t": "The Adventures of Big Sil: Philadelphia, PA (READ ALOUD!)",
"id": "KxPmCcoHxDg",
"s": "Khác"
},
{
"t": "The Adventures of Big Sil: Los Angeles CA (READ ALOUD!)",
"id": "09OiC4GO2Jc",
"s": "Khác"
},
{
"t": "The Adventures of Big Sil: New York, NY (READ ALOUD!)",
"id": "fOKn-UtOVn4",
"s": "Khác"
},
{
"t": "Why Is It Winter?",
"id": "4FXFf4queFE",
"s": "Khác"
},
{
"t": "Is It Hanukkah Yet?",
"id": "JKsEswcqekY",
"s": "Khác"
},
{
"t": "La Noche Buena (A Christmas Story)",
"id": "n1swTBqoLb8",
"s": "Khác"
},
{
"t": "Shanté Keys & the New Year’s Peas (+Auld Lang Syne) READ/SUNG ALOUD",
"id": "BfD7Go7do9Q",
"s": "Khác"
},
{
"t": "Chestnuts Roasting On An Open Fire (The Christmas Song) READ/SUNG ALOUD",
"id": "2F8LG56DCTY",
"s": "Khác"
},
{
"t": "Pinkalicious: Merry Pinkmas!",
"id": "A170ZLn5pP0",
"s": "Pinkalicious"
},
{
"t": "A Pirate’s Night Before Christmas",
"id": "GBrzOn9uxos",
"s": "Khác"
},
{
"t": "The Dinosaurs’ Night Before Christmas | Dinosaur Books and Christmas Books for Kids",
"id": "ygdlxyjwddo",
"s": "Khác"
},
{
"t": "How Santa Lost His Job",
"id": "TB6kvo4FnFw",
"s": "Khác"
},
{
"t": "How Santa Got His Job",
"id": "deM6IGavatQ",
"s": "Khác"
},
{
"t": "A Homemade Together Christmas",
"id": "9J81fja2wVU",
"s": "Khác"
},
{
"t": "The Night the Lights Went Out on Christmas",
"id": "eq9M7q95GhE",
"s": "Khác"
},
{
"t": "Rudy’s Windy Christmas",
"id": "EWkmCY73ou8",
"s": "Khác"
},
{
"t": "Bear Snores On",
"id": "8e-81IWzH5w",
"s": "Khác"
},
{
"t": "The Lonely Typewriter",
"id": "ilPnCNtyR3A",
"s": "Khác"
},
{
"t": "The Lonely Phone Booth",
"id": "yuNppsYiSck",
"s": "Khác"
},
{
"t": "The Jacket",
"id": "Wr2GpthExEo",
"s": "Khác"
},
{
"t": "I Don’t Want To Go To The Hospital (a little Princess story)",
"id": "YqlC6MotpNU",
"s": "Khác"
},
{
"t": "Bear Feels Sick",
"id": "Rl46jfl10BQ",
"s": "Khác"
},
{
"t": "A Children’s Book About Being Destructive",
"id": "za37OVB-72k",
"s": "Khác"
},
{
"t": "Sanctuary | RELAXING KIDS BOOK READ ALOUD! (works on adults, too!)",
"id": "mFMsZfmyICg",
"s": "Khác"
},
{
"t": "Extreme Opposites",
"id": "4K5PWKLqVF8",
"s": "Khác"
},
{
"t": "Revolutionary Friends: General George Washington & the Marquis de Lafayette",
"id": "Es5R7yFzCVs",
"s": "Khác"
},
{
"t": "Madam President",
"id": "oKswNRKLS6w",
"s": "Khác"
},
{
"t": "Duck for President",
"id": "VQKtV3bed0c",
"s": "Khác"
},
{
"t": "If I Ran For President",
"id": "OCRCrKsvrjw",
"s": "Khác"
},
{
"t": "Vote for Me!",
"id": "bvKxMmofGvE",
"s": "Khác"
},
{
"t": "There Was An Old Lady Who Swallowed A Bat READ & SUNG ALOUD!",
"id": "sNbBL7T5vso",
"s": "Khác"
},
{
"t": "The Case of the Missing Hat (Mini-Mystery with Mickey Mouse & Friends)",
"id": "iryUSgh1Cdg",
"s": "Disney"
},
{
"t": "Hurricane!",
"id": "kaOREqlepgM",
"s": "Khác"
},
{
"t": "René Has Two Last Names / René Tiene Dos Apellidos BILINGUAL",
"id": "7I8TJCWZF5o",
"s": "Khác"
},
{
"t": "Ser Vecinos (Being Neighbors) by Mister Rogers BILINGUAL READ ALOUD! (Spanish/English)",
"id": "BSu41hqMmw0",
"s": "Khác"
},
{
"t": "A Rainbow of Friends",
"id": "7F3s_nqY29Q",
"s": "Khác"
},
{
"t": "Funny Folks NURSERY RHYMES",
"id": "2phX703TWic",
"s": "Khác"
},
{
"t": "Family Favorites NURSERY RHYMES",
"id": "Ax_EnAwi7Bs",
"s": "Khác"
},
{
"t": "Silly Rhymes NURSERY RHYMES",
"id": "2ZSBnbX99to",
"s": "Khác"
},
{
"t": "Fall Mixed Up",
"id": "2XDZouCAg3U",
"s": "Khác"
},
{
"t": "There Was An Old Lady Who Swallowed Some Leaves",
"id": "scrg2prj0vA",
"s": "Khác"
},
{
"t": "Why Do Leaves Change Color? | Fall Stories for Kids",
"id": "uhnlyM_VzBU",
"s": "Khác"
},
{
"t": "Columbus Day for Kids + the “IN 1492” Poem",
"id": "rlbCsN6WGSY",
"s": "Khác"
},
{
"t": "Ponce de Leon",
"id": "8HIizzdKiwE",
"s": "Khác"
},
{
"t": "Your Fantastic Elastic Brain READ ALOUD! ~ Stem for Kids",
"id": "8QSPfnQCIY0",
"s": "Khác"
},
{
"t": "There Was An Old Lady Who Swallowed A Desk",
"id": "9tDe822KCCI",
"s": "Khác"
},
{
"t": "School’s First Day of School | Kids BACK TO SCHOOL Book",
"id": "E3O-DHBj3Uo",
"s": "Khác"
},
{
"t": "Voy A La Escuela (I’m Going to School) Bilingual Book",
"id": "l-KQYWzDU1A",
"s": "Khác"
},
{
"t": "Pinkalicious School Lunch | Kids Books READ ALOUD for Children!",
"id": "24SwGWc_JQ0",
"s": "Pinkalicious"
},
{
"t": "Gymnastics (A True Book)",
"id": "22ol77XV9uc",
"s": "Khác"
},
{
"t": "Kindergarten, Here I Come!",
"id": "EkxDa7o0L3I",
"s": "Khác"
},
{
"t": "Curious George’s First Day of School",
"id": "OEtAJwkgpAQ",
"s": "Curious George"
},
{
"t": "Mind Your Manners In School",
"id": "lMyET57vmZ0",
"s": "Khác"
},
{
"t": "If You Ever Want To Bring An Alligator to School, DON’T! (READ ALOUD!)",
"id": "JRYXjO4YbnY",
"s": "Khác"
},
{
"t": "Pinkalicious and the New Teacher",
"id": "tHTC9wyX08Q",
"s": "Pinkalicious"
},
{
"t": "Look Out, Kindergarten, Here I Come!",
"id": "EcaCsJ1inr4",
"s": "Khác"
},
{
"t": "Never Play Music Right Next to the Zoo READ/SUNG ALOUD!",
"id": "3486fgfQD0s",
"s": "Khác"
},
{
"t": "My Hippie Grandmother",
"id": "4CK4wCcnezU",
"s": "Khác"
},
{
"t": "Spot on the Farm",
"id": "7RKG1wFHmDU",
"s": "Khác"
},
{
"t": "My Yiddish Vacation",
"id": "EL6M0Pw3pZI",
"s": "Khác"
},
{
"t": "A Story about the Everglades",
"id": "4v6MgalTS_0",
"s": "Khác"
},
{
"t": "What Lives In A Shell?",
"id": "dgI6QtL8zaE",
"s": "Khác"
},
{
"t": "Ariel Learns A Lesson",
"id": "Gtt2rrU4syA",
"s": "Khác"
},
{
"t": "Aqualicious READ ALOUD (A Pinkalicious Story)",
"id": "3vc_SBgXpFk",
"s": "Pinkalicious"
},
{
"t": "The ORIGINAL Little Mermaid",
"id": "v2WQzizLlPk",
"s": "Khác"
},
{
"t": "Disney’s The Little Mermaid",
"id": "LuoFMvY6bT0",
"s": "Disney"
},
{
"t": "Cinderella: The Terrible Truth",
"id": "PaZkBEtCqKo",
"s": "Khác"
},
{
"t": "Cinderella (the Walt Disney Classic)",
"id": "YS1Hx_m_8zY",
"s": "Disney"
},
{
"t": "Disney’s Beauty and the Beast",
"id": "fRyz_F2KslI",
"s": "Disney"
},
{
"t": "Jorge el Curioso Vuela Una Cometa / Curious George Flies A Kite BILINGUAL BOOK",
"id": "c_xvggNKaLM",
"s": "Curious George"
},
{
"t": "Curious George Takes a Train",
"id": "ttX_-2xcQtQ",
"s": "Curious George"
},
{
"t": "Curious George Makes Pancakes",
"id": "7S_k4FosEKA",
"s": "Curious George"
},
{
"t": "Curious George Gets a Medal",
"id": "MMBNTdGWXU4",
"s": "Curious George"
},
{
"t": "Curious George at the Aquarium",
"id": "9Fei_KLude4",
"s": "Curious George"
},
{
"t": "Round Trip",
"id": "IKaMSRIbAEE",
"s": "Khác"
},
{
"t": "Away From Home",
"id": "RJMJDNSwXNI",
"s": "Khác"
},
{
"t": "America – A Patriotic Primer by Lynne Cheney",
"id": "2FSo-VuaHnE",
"s": "Khác"
},
{
"t": "Buenos Noches, Estados Unidos (Good Night, United States) BILINGUAL",
"id": "SZYQZaPlK2k",
"s": "Khác"
},
{
"t": "Guess How Much I Love You",
"id": "5b6Fnr0IgQ4",
"s": "Khác"
},
{
"t": "America Is…",
"id": "tgo8wrnFylA",
"s": "Khác"
},
{
"t": "The All-American Jump and Jive Jig",
"id": "fA0cFz_GyFE",
"s": "Khác"
},
{
"t": "Mr. Putter and Tabby Row the Boat",
"id": "49el3khEzPQ",
"s": "Khác"
},
{
"t": "The Dunderheads Behind Bars",
"id": "vFMjXKAE7pE",
"s": "Khác"
},
{
"t": "Aliens Took My Daughter",
"id": "wuo-WANU5vA",
"s": "Khác"
},
{
"t": "Papá and Me READ ALOUD! (English story with a little Español)",
"id": "jMjTUxwxu50",
"s": "Khác"
},
{
"t": "Never Take A Shark to the Dentist (and other things not to do)",
"id": "JRRM7JAStYk",
"s": "Khác"
},
{
"t": "A Rhinoceros? Preposterous!",
"id": "Og6bzyoDrAg",
"s": "Khác"
},
{
"t": "Puff, the Magic Dragon | Dragon Book",
"id": "nd6zCZLilws",
"s": "Khác"
},
{
"t": "We’re in the Wrong Book!",
"id": "7w4V4uaCnSQ",
"s": "Khác"
},
{
"t": "What Do You Do With An Idea? A GROWTH MINDSET",
"id": "9Lyh1Ep_Zkc",
"s": "Khác"
},
{
"t": "The Book With No Pictures",
"id": "o1ytkeiBL6w",
"s": "Khác"
},
{
"t": "The Three Little Pigs and the Somewhat Bad Wolf",
"id": "5t_BfXZB2g0",
"s": "Khác"
},
{
"t": "The Three Little Wolves and the Big Bad Pig",
"id": "vvgR5Cuq1Xw",
"s": "Khác"
},
{
"t": "The Princess and the Bowling Ball",
"id": "tJncVzbrW0g",
"s": "Khác"
},
{
"t": "The Really Ugly Duckling",
"id": "z_u9m7-ELDA",
"s": "Khác"
},
{
"t": "Really, Rapunzel Needed a Haircut! The Story of Rapunzel as Told by Dame Gothel",
"id": "Kq5e60gE31c",
"s": "Khác"
},
{
"t": "Hero Dad",
"id": "YU-_h8-fCwA",
"s": "Khác"
},
{
"t": "Cinco de Mayo…Day of Mexican Pride",
"id": "kyCC1eFgeys",
"s": "Khác"
},
{
"t": "Curious George and the Firefighters",
"id": "Efhc6J1jY3Y",
"s": "Curious George"
},
{
"t": "Happy Mother’s Day, Mami! (a Dora the Explorer book)",
"id": "Y32kBjq3qNQ",
"s": "Dora the Explorer"
},
{
"t": "T. Rex and the Mother’s Day Hug | Dinosaurs for Kids",
"id": "qvE-HPFTA9s",
"s": "Khác"
},
{
"t": "Pinkalicious Mother’s Day Surprise",
"id": "D3nWqMTHH00",
"s": "Pinkalicious"
},
{
"t": "The Little Red Hen and The Passover Matzah",
"id": "I5an03Z6eJw",
"s": "Khác"
},
{
"t": "Grover & Big Bird’s Passover Celebration (a Shalom Sesame Street book)",
"id": "iPABRjq_x1w",
"s": "Khác"
},
{
"t": "A Tale of Two Seders",
"id": "twotRP1fU98",
"s": "Khác"
},
{
"t": "Michael Recycle",
"id": "aZj14ChIY8I",
"s": "Khác"
},
{
"t": "Joy in Mudville",
"id": "QeCn_4iICv0",
"s": "Khác"
},
{
"t": "Curious George at the Baseball Game",
"id": "TlmJEvezakc",
"s": "Curious George"
},
{
"t": "Taxes, Taxes! Where The Money Goes (a kid’s book about taxation!)",
"id": "abx8-pWNfP4",
"s": "Khác"
},
{
"t": "I Could Be You Could Be (a book about possibilities)",
"id": "8dFxHcPjpck",
"s": "Khác"
},
{
"t": "A Spree in Paree",
"id": "h1IPd24QqgQ",
"s": "Khác"
},
{
"t": "Ooh-La-La…Max In Love | Kids Book READ ALOUD & set in Paris!",
"id": "fZj54_oDYLA",
"s": "Khác"
},
{
"t": "A Giraffe Goes To Paris",
"id": "VJH7WdDG-84",
"s": "Khác"
},
{
"t": "Too Much Noise",
"id": "C1h5YzE3LSc",
"s": "Khác"
},
{
"t": "The Listening Walk",
"id": "kzQOdEAIH5E",
"s": "Khác"
},
{
"t": "Zin! Zin! Zin! A Violin",
"id": "1afZy2T724M",
"s": "Khác"
},
{
"t": "Tubby the Tuba",
"id": "P1ZxtIeZCTs",
"s": "Khác"
},
{
"t": "Prince Cinders (a Dude Cinderella tale)",
"id": "Ta9pwElgF5E",
"s": "Khác"
},
{
"t": "Bigfoot Cinderrrrrella",
"id": "EwXOt0-NzP0",
"s": "Khác"
},
{
"t": "Adelita: A Mexican Cinderella Story",
"id": "WU5ChrHOwHg",
"s": "Khác"
},
{
"t": "Cinderella’s Rat",
"id": "vET46mcR1js",
"s": "Khác"
},
{
"t": "Seriously, Cinderella Is SO Annoying! The Cinderella Story as Told by the Wicked Stepmother",
"id": "QhkqPWy2NLo",
"s": "Khác"
},
{
"t": "The Easter Story | Kid Book READ ALOUD for Easter",
"id": "Hulj_iPivbc",
"s": "Khác"
},
{
"t": "Clifford’s Happy Easter (Clifford the Big Red Dog)",
"id": "Y44r9_IzHms",
"s": "Clifford"
},
{
"t": "The Sparrow’s Easter Song",
"id": "YSnzy9j83O8",
"s": "Khác"
},
{
"t": "Easter Bunny’s Amazing Egg Machine",
"id": "M4INNY5yY4o",
"s": "Khác"
},
{
"t": "The Leprechaun Who Lost His Rainbow | Kid Book READ ALOUD for St. Patrick’s Day!",
"id": "B6P_3NA0esU",
"s": "Khác"
},
{
"t": "Celebra el Dia de San Patricio con Samantha y Lola BILINGUAL SPANISH/ENGLISH STORY",
"id": "Xz-0gTh-hoo",
"s": "Khác"
},
{
"t": "There Was An Old Lady Who Swallowed A Clover",
"id": "a1yCcn3L_e0",
"s": "Khác"
},
{
"t": "Clap Your Hands",
"id": "00vK-P-lLt0",
"s": "Khác"
},
{
"t": "This Jazz Man READ/SUNG ALOUD!",
"id": "bSr1HEvcMhU",
"s": "Khác"
},
{
"t": "The True Story of The 3 Little Pigs by A. Wolf",
"id": "2QnUtqVEw2k",
"s": "Khác"
},
{
"t": "The Boy Who Loved Math… The Improbable Life of Paul Erdos",
"id": "ikcswbrOMVQ",
"s": "Khác"
},
{
"t": "Multiplying Menace: The Revenge of Rumpelstiltskin (a Math adventure READ ALOUD!)",
"id": "6Ft6JJYsAnc",
"s": "Khác"
},
{
"t": "Another Brother",
"id": "R_TWW7y6RkM",
"s": "Khác"
},
{
"t": "Lisa’s Baby Sister",
"id": "EDBvuug40-Y",
"s": "Khác"
},
{
"t": "What in the World is a Leap Year? And Other Time Measurements",
"id": "RPlPLLBFUgU",
"s": "Khác"
},
{
"t": "If I Were President",
"id": "iWOMDDS9tm4",
"s": "Khác"
},
{
"t": "City Pig",
"id": "XjoSS9vgXJg",
"s": "Khác"
},
{
"t": "Larry Gets Lost in New York City",
"id": "zoobcKsYrIA",
"s": "Khác"
},
{
"t": "When Louis Armstrong Taught Me Scat",
"id": "YKfb5u3TA14",
"s": "Khác"
},
{
"t": "Amazing Grace",
"id": "MujmK9lnmjM",
"s": "Khác"
},
{
"t": "12 Days of New York",
"id": "jzlDXqRXzY4",
"s": "Khác"
},
{
"t": "Presidents’ Day for Kids",
"id": "Ueo1vLeNSzY",
"s": "Khác"
},
{
"t": "Winter Song: A Poem by William Shakespeare",
"id": "VeS0CZ6YeL0",
"s": "Khác"
},
{
"t": "Let It Snow",
"id": "jMEfqkD03FM",
"s": "Khác"
},
{
"t": "The Runaway Wok (A Chinese New Year Folk Tale)",
"id": "Z6EduahxEMY",
"s": "Khác"
},
{
"t": "Dino-Football | Dinosaurs for Kids",
"id": "0t4mQBzWCiU",
"s": "Khác"
},
{
"t": "Goodnight Football",
"id": "IytEV4eggKE",
"s": "Khác"
},
{
"t": "Alexander, Who Used to Be Rich Last Sunday",
"id": "t8ONiN5wN8Y",
"s": "Khác"
},
{
"t": "Good Morning, Groundhog! (A Ready, Freddy! book)",
"id": "eTv9bUjdO34",
"s": "Khác"
},
{
"t": "Curious George / Jorge el Curioso BILINGUAL STORY READ ALOUD (the Original Curious George book!)",
"id": "8VOd_6UOx2Q",
"s": "Curious George"
},
{
"t": "Curious George and The Pizza Party",
"id": "y-ixDEHOWAA",
"s": "Curious George"
},
{
"t": "Curious George At The Parade",
"id": "ofAuRvwZrSA",
"s": "Curious George"
},
{
"t": "Curious George’s Dinosaur Discovery | Dinosaurs for Kids",
"id": "iVkpv2wkoC0",
"s": "Curious George"
},
{
"t": "Martin’s Big Words: The Life of Dr. Martin Luther King, Jr",
"id": "n0xf91c6dyc",
"s": "Khác"
},
{
"t": "Elsa’s Gift (from Disney’s Frozen)",
"id": "ZfD3VtweKMk",
"s": "Disney"
},
{
"t": "Duck-Upations",
"id": "eeipvFmQ1_M",
"s": "Khác"
},
{
"t": "Ducks In Socks",
"id": "NtUm7UtN9dQ",
"s": "Khác"
},
{
"t": "Ow! Ow, Cow!",
"id": "WQpZaD3Grbc",
"s": "Khác"
},
{
"t": "The Picky Chicky",
"id": "bt6c-rpXTJ0",
"s": "Khác"
},
{
"t": "On Three Kings Day / El Dia de los Tres Reyes Magos (THE EPIPHANY) BILINGUAL HOLIDAY BOOK",
"id": "qaeOCYg_-l4",
"s": "Khác"
},
{
"t": "Happy New Year, Pooh!",
"id": "6w2LOxIh_mM",
"s": "Disney"
},
{
"t": "New Clothes for New Year’s Day",
"id": "vsmjMcqTv-M",
"s": "Khác"
},
{
"t": "Olive, the Other Reindeer | Christmas Books for Kids",
"id": "sqzCGcnkoP8",
"s": "Khác"
},
{
"t": "The Worst Twelve Days of Christmas READ/SUNG ALOUD!",
"id": "oXex1iacv7s",
"s": "Khác"
},
{
"t": "‘Twas the Day After Christmas",
"id": "Skpx6uTgLxE",
"s": "Khác"
},
{
"t": "No Room At The Inn: The Nativity Story",
"id": "xhmvlyqPrxE",
"s": "Khác"
},
{
"t": "‘​Twas the Night Before Christmas",
"id": "FgdO1S1YhQY",
"s": "Khác"
},
{
"t": "Mickey’s Night Before Christmas",
"id": "SP5-mWSfT4o",
"s": "Disney"
},
{
"t": "Room for a Little One: A Christmas Tale",
"id": "sSh6MtGHQxQ",
"s": "Khác"
},
{
"t": "The Birds of Bethlehem (a Nativity Story)",
"id": "dLJyDUYRk1c",
"s": "Khác"
},
{
"t": "Era La Vispera De Navidad (‘Twas The Night Before Christmas) READ ALOUD IN SPANISH / EN Español!",
"id": "pp6ap5fYpDM",
"s": "Khác"
},
{
"t": "I Know An Old Lady Who Swallowed A Dreidel (a wacky Hanukkah rhyme) READ & KINDA SUNG ALOUD",
"id": "Xak4G3QhD3U",
"s": "Khác"
},
{
"t": "An Irish Night Before Christmas",
"id": "H-a-mDObaEo",
"s": "Khác"
},
{
"t": "The Night of Las Posadas",
"id": "UyTPME5WbYk",
"s": "Khác"
},
{
"t": "Peppa Pig and the Lost Christmas List",
"id": "nx-8DSNy6UM",
"s": "Peppa Pig"
},
{
"t": "Clifford’s First Christmas",
"id": "BZaLAfYsv_c",
"s": "Clifford"
},
{
"t": "Feliz Navidad: Celebrating Christmas ENGLISH/SPANISH BILINGUAL SONG SUNG-ALOUD!",
"id": "760xPuTALjY",
"s": "Khác"
},
{
"t": "Olivia Helps With Christmas",
"id": "GljnYZ5jLG8",
"s": "Olivia"
},
{
"t": "Hanukkah Spanish/English Story Read Aloud Bilingually",
"id": "4NZBMtj4bgY",
"s": "Khác"
},
{
"t": "Lots of Latkes: A Hanukkah Story",
"id": "OEAH6bo9tls",
"s": "Khác"
},
{
"t": "Papa’s Latkes",
"id": "UlRFkGGzSs4",
"s": "Khác"
},
{
"t": "Chanukah (Rookie Read-About Holidays)",
"id": "wEDfEs_4qcY",
"s": "Khác"
},
{
"t": "How Do Dinosaurs Say Happy Chanukah? | Jewish Books",
"id": "7RVxwW5AjaM",
"s": "Khác"
},
{
"t": "Rabbi Benjamin’s Buttons",
"id": "7zx7q828070",
"s": "Khác"
},
{
"t": "The First Night of Hanukkah",
"id": "1ECjFQHAiZo",
"s": "Khác"
},
{
"t": "Angel Pig",
"id": "SBjklqz0d-I",
"s": "Khác"
},
{
"t": "Merry Christmas, Curious George",
"id": "PVy0pAELcUg",
"s": "Curious George"
},
{
"t": "Good Night North Pole",
"id": "6kSkTZ16yYs",
"s": "Khác"
},
{
"t": "Redbird at Rockefeller Center (A Story of a Christmas Miracle)",
"id": "1Y8u3iL-czs",
"s": "Khác"
},
{
"t": "Si Llevas Un Raton Al Cine (If You Take A Mouse to the Movies) BILINGUAL BOOK",
"id": "N5GURkYNDHU",
"s": "Khác"
},
{
"t": "Today is Thanksgiving!",
"id": "gUVJ6K6xT_Q",
"s": "Khác"
},
{
"t": "‘Twas the Night Before Thanksgiving",
"id": "iK1ZdaSQysU",
"s": "Khác"
},
{
"t": "Grateful: A Song of Giving Thanks",
"id": "ozd6SLN_8Sw",
"s": "Khác"
},
{
"t": "Thanksgiving Day A READ ALOUD HISTORY",
"id": "V6ua-Hj2Kcw",
"s": "Khác"
},
{
"t": "How Many Days to America? A Thanksgiving Story",
"id": "4tCHsF9RI3s",
"s": "Khác"
},
{
"t": "Rotten Ralph’s Thanksgiving Wish",
"id": "IV6jCrF5V0I",
"s": "Khác"
},
{
"t": "Run, Turkey, Run! READ & KINDA SUNG ALOUD",
"id": "U4AdjD96yRQ",
"s": "Khác"
},
{
"t": "The First Thanksgiving (Jr. Graphic Colonial America)",
"id": "XPo92KCdx4I",
"s": "Khác"
},
{
"t": "Si Le Das Un Pastelito A Un Gato (If You Give A Cat A Cupcake) BILINGUAL BOOK",
"id": "S3twMwDV_qI",
"s": "If You Give a Mouse"
},
{
"t": "Spot Goes to the Beach",
"id": "USDhhQWR39A",
"s": "Khác"
},
{
"t": "Harry the Dirty Dog",
"id": "uveD1OmFR3w",
"s": "Khác"
},
{
"t": "Nick Jr. Blue’s Room “Blue Says”",
"id": "2qSeBEvporY",
"s": "Khác"
},
{
"t": "Spot Visits His Grandparents",
"id": "dhiU_V0isW8",
"s": "Khác"
},
{
"t": "Olivia (the very first book) BILINGUAL SPANISH/ENGLISH",
"id": "nKj1gPhA5tw",
"s": "Olivia"
},
{
"t": "Chicka Chicka 1-2-3 READ/JAMMED OUT LOUD!",
"id": "hqYuQU2z_PM",
"s": "Khác"
},
{
"t": "Purplicious (a Pinkalicious story)",
"id": "lBtsYYwsSt4",
"s": "Pinkalicious"
},
{
"t": "Madeline and the Gypsies",
"id": "0a6wXyZ9-Qk",
"s": "Madeline"
},
{
"t": "Mickey & Friends Mystery at the Haunted Hotel",
"id": "uFplP-ZL50A",
"s": "Disney"
},
{
"t": "Manners in Public",
"id": "LDHn7Vg-FEY",
"s": "Khác"
},
{
"t": "Hare and the Tortoise (Aesop’s Fables)",
"id": "NQ_eJEJzMJQ",
"s": "Khác"
},
{
"t": "Amelia Bedelia’s First Vote",
"id": "iKV8h7BIOYI",
"s": "Khác"
},
{
"t": "Olivia y Las Princesas BILINGUAL SPANISH/ENGLISH STORY",
"id": "PVNwU8fljyg",
"s": "Olivia"
},
{
"t": "The Vampire Bunny (Bunnicula and Friends)",
"id": "gptVzX-aPZI",
"s": "Khác"
},
{
"t": "The Witch Who Was Afraid of Witches",
"id": "iczO-Vi_yWQ",
"s": "Khác"
},
{
"t": "Sesame Street Spooky Sleep-Out",
"id": "j0Z-YBbE8eE",
"s": "Khác"
},
{
"t": "Henry and Mudge and The Snowman Plan",
"id": "LrnusxcNnkE",
"s": "Khác"
},
{
"t": "The Little Shop of Monsters",
"id": "LjAHgtSm_r8",
"s": "Khác"
},
{
"t": "Corduroy’s Best Halloween Ever!",
"id": "bRlAWh6pK-I",
"s": "Khác"
},
{
"t": "Olivia and the Haunted Hotel",
"id": "kTBPA6NMvvs",
"s": "Olivia"
},
{
"t": "Julius’s Candy Corn",
"id": "Rpa8WQO-jBA",
"s": "Khác"
},
{
"t": "It Was Halloween Night…a Scary Math Story — with Tangrams!",
"id": "CB-MyveRALM",
"s": "Khác"
},
{
"t": "Dora’s Spooky Halloween",
"id": "EfJUw9LuRkQ",
"s": "Dora the Explorer"
},
{
"t": "A Big Night in Booville",
"id": "ImIjoXiIK5Q",
"s": "Khác"
},
{
"t": "Cats/Gatos (Powerkids Readers: My World of Animals) BILINGUAL BOOK",
"id": "dGH2iZvqt4U",
"s": "Khác"
},
{
"t": "A Very Brave Witch",
"id": "FNOWtH6n0_s",
"s": "Khác"
},
{
"t": "I’m Not Scared | Halloween",
"id": "Dh19C-E_VBA",
"s": "Khác"
},
{
"t": "Columbus Day",
"id": "dI02lTU_qvM",
"s": "Khác"
},
{
"t": "El Conejito Andarín (The Runaway Bunny in Spanish/English)",
"id": "67O0vreIAK0",
"s": "Khác"
},
{
"t": "Goofy’s Big Race (Walt Disney’s Fun-to-Read Library)",
"id": "NagCq4I8pjU",
"s": "Disney"
},
{
"t": "Mickey Meets The Giant (A Walt Disney Beginning Reader)",
"id": "Oh_6Kr3mRB8",
"s": "Disney"
},
{
"t": "Walt Disney’s Snow White and the Seven Dwarfs READ ALOUD WITH A DISGUSTED MALEFICENT",
"id": "ld4j77rQQgg",
"s": "Disney"
},
{
"t": "Me Llamo Celia / My Name is Celia – The Life of Celia Cruz / La Vida de Celia Cruz (BILINGUAL STORY)",
"id": "ef8P93gJBnQ",
"s": "Khác"
},
{
"t": "Elmo Gets Homesick (Sesame Street/a Growing Up book)",
"id": "DUIyzE4S4BU",
"s": "Khác"
},
{
"t": "Kevin Goes to the Hospital",
"id": "Fd7aXM5AAHM",
"s": "Khác"
},
{
"t": "If You Take A Mouse To The Movies",
"id": "e_OfEoNNuXc",
"s": "Khác"
},
{
"t": "I Know A Shy Fellow Who Swallowed A Cello READ ALOUD/SUNG ALOUD!",
"id": "ASgWRhmmWTg",
"s": "Khác"
},
{
"t": "Moostache",
"id": "xzromv1y56w",
"s": "Khác"
},
{
"t": "Amelia Bedelia Goes Back To School",
"id": "PwGRpDjyNGk",
"s": "Khác"
},
{
"t": "My First Day at Nursery School",
"id": "FMSZkcyXqew",
"s": "Khác"
},
{
"t": "A Funny Man (My First Hello Reader!) READ OUT LOUD",
"id": "oLlMaXSqAD8",
"s": "Khác"
},
{
"t": "Good-Night, Owl!",
"id": "iFzbGjmeJMU",
"s": "Khác"
},
{
"t": "1, 2, 3, Gatitos (1, 2, 3, Cats) A BILINGUAL BOOK",
"id": "4w4XbB-jdy8",
"s": "Khác"
},
{
"t": "Curious George Plants A Tree",
"id": "hAq8pZ44mdE",
"s": "Curious George"
},
{
"t": "Maisy Va Al Hospital (Maisy Goes To The Hospital) Bilingual Book",
"id": "IrCeFiATrPc",
"s": "Khác"
},
{
"t": "Chu’s Day",
"id": "QkY3S8fk5oQ",
"s": "Khác"
},
{
"t": "Panda Bear, Panda Bear, What Do You See?",
"id": "G6hNpfoJR84",
"s": "Khác"
},
{
"t": "Oso Pardo, Oso Pardo, Que Ves Ahi?",
"id": "oRI-s8SXiAg",
"s": "Khác"
},
{
"t": "Beach Day!",
"id": "NdMnleDS_0w",
"s": "Khác"
},
{
"t": "It’s Summer!",
"id": "IruskjEe4cc",
"s": "Khác"
},
{
"t": "Mi Mundo (Spanish edition of My World)",
"id": "7bh2UNXG4M0",
"s": "Khác"
},
{
"t": "Farmyard Counting Book",
"id": "4UWoHMuHSxE",
"s": "Khác"
},
{
"t": "¡Sorpresa! ¿Dónde estan los bebés?",
"id": "XnR5f9F80vk",
"s": "Khác"
},
{
"t": "The Velveteen Rabbit",
"id": "QwOe6ewBWLg",
"s": "Khác"
},
{
"t": "Pinocchio’s Adventures",
"id": "ppiOtYMjgXQ",
"s": "Khác"
},
{
"t": "Walt Disney’s Sleeping Beauty STORYBOOK",
"id": "l_ilLznFVAU",
"s": "Disney"
},
{
"t": "The Norfin Trolls Laugh Out Loud",
"id": "8pUpc1qqnbc",
"s": "Khác"
},
{
"t": "The Hunchback of Notre Dame",
"id": "8FXD807hjEY",
"s": "Khác"
},
{
"t": "Chicka Chicka Boom Boom",
"id": "0YeSM6nyr58",
"s": "Khác"
},
{
"t": "How Much Is A Million?",
"id": "YOgcsHetRZo",
"s": "Khác"
},
{
"t": "Walt Disney’s Alice in Wonderland | STORYBOOK",
"id": "h4_trO8CDo4",
"s": "Disney"
},
{
"t": "Amelia Bedelia",
"id": "4S0PjqKPawc",
"s": "Khác"
},
{
"t": "Caps For Sale",
"id": "6PeE9BLhvrQ",
"s": "Khác"
},
{
"t": "Henry and Mudge: The First Book",
"id": "91rwV6qcf80",
"s": "Khác"
},
{
"t": "Flat Stanley and the Haunted House",
"id": "UUMk66HX3YQ",
"s": "Khác"
},
{
"t": "Quick As A Cricket",
"id": "S2SvQa_H-eU",
"s": "Khác"
},
{
"t": "The Milkmaid & Her Pail by Aesop",
"id": "0sNrYK35E_g",
"s": "Khác"
},
{
"t": "Slide and Slurp, Scratch and Burp: More About Verbs",
"id": "7rgaMHMCjLI",
"s": "Khác"
},
{
"t": "The Lioness (Aesop’s Fable)",
"id": "lqsvJ5Vbvjo",
"s": "Khác"
},
{
"t": "Goldilocks and the Three Hares",
"id": "Fjr2mmB4YLY",
"s": "Khác"
},
{
"t": "The Star-Spangled Banner | Read & Sung Aloud for Kids!",
"id": "dBhZrA5VAP0",
"s": "Khác"
},
{
"t": "The Monkey & the Dolphin by Aesop",
"id": "JbB5TKQfkWk",
"s": "Khác"
},
{
"t": "Always In Trouble",
"id": "4m5EzrIqOkI",
"s": "Khác"
},
{
"t": "Just Grandma and Me",
"id": "lVx6DRSR_VQ",
"s": "Khác"
},
{
"t": "Red, White, and Boom!",
"id": "CSGQvgO0op8",
"s": "Khác"
},
{
"t": "There Was An Old Monster!",
"id": "W7yLfEe5z58",
"s": "Khác"
},
{
"t": "A Children’s Book About Teasing (Help Me Be Good)",
"id": "k60fw340Krk",
"s": "Khác"
},
{
"t": "The Runaway Bunny",
"id": "ogCpCt0h3h8",
"s": "Khác"
},
{
"t": "When the Fly Flew In . . .",
"id": "LWUQGncw7a0",
"s": "Khác"
},
{
"t": "Gente Que Hay Que Conocer: Walt Disney",
"id": "tfOkTRwO9d4",
"s": "Disney"
},
{
"t": "Mr. Tickle",
"id": "HNHgq_qktao",
"s": "Khác"
},
{
"t": "Five in the Bed",
"id": "2RWnA1ZNWQE",
"s": "Khác"
},
{
"t": "Mr. Grumpy",
"id": "SJ9i0uDicrc",
"s": "Khác"
},
{
"t": "La Mula / The Cimarron Mule: A Puerto Rican Folk Tale",
"id": "A2Sw-eblfnU",
"s": "Khác"
},
{
"t": "Belling The Cat (Aesop’s Fable)",
"id": "DTMuO9FmFYg",
"s": "Khác"
},
{
"t": "My Dad Thinks He’s Funny",
"id": "1JWqgB7glAw",
"s": "Khác"
},
{
"t": "The Song of El Coqui | Kids Book Read Aloud! (Puerto Rican Folk Tale)",
"id": "CaEEmMiBp0Y",
"s": "Khác"
},
{
"t": "Cosita Linda (Little Beauty en Español)",
"id": "fSUw_nJn1QI",
"s": "Khác"
},
{
"t": "But Who Will Bell The Cats? (an AESOP sequel!)",
"id": "DGbKZGnrlAA",
"s": "Khác"
},
{
"t": "A Children’s Book About Being Selfish",
"id": "2MaspDJ3K58",
"s": "Khác"
},
{
"t": "The Cloud Spinner",
"id": "HH9uN0Ti7qg",
"s": "Khác"
},
{
"t": "Abuelo (Grandfather) BILINGUAL",
"id": "XIHI8JS9AwA",
"s": "Khác"
},
{
"t": "Pinkalicious en Español (& translated into English!)",
"id": "g6VJMQ6qUJ8",
"s": "Pinkalicious"
},
{
"t": "Oh No! Time to Go! A Book of Goodbyes",
"id": "XsRtIAi1Bxk",
"s": "Khác"
},
{
"t": "Memorial Day",
"id": "1WtxHZnErsE",
"s": "Khác"
},
{
"t": "I Love Saturdays y Domingos BILINGUAL",
"id": "zS5r6P3NnNA",
"s": "Khác"
},
{
"t": "I’m Adopted!",
"id": "VBPGGPA5kt8",
"s": "Khác"
},
{
"t": "I Am Honest",
"id": "brneixF_zjA",
"s": "Khác"
},
{
"t": "When You Meet A Bear On Broadway",
"id": "9RFTAi24bTk",
"s": "Khác"
},
{
"t": "Oh, The Things My Mom Will Do…",
"id": "y8WJVZcE7Fo",
"s": "Khác"
},
{
"t": "If I Were Your Mother",
"id": "OAok6GUOddE",
"s": "Khác"
},
{
"t": "Mr. Cheerful",
"id": "IQi6TUtzJkc",
"s": "Khác"
},
{
"t": "Go Away, Big Green Monster!",
"id": "dkgqPQ0K7gE",
"s": "Khác"
},
{
"t": "The Three Billy Goats Gruff",
"id": "TY7fmYYlVa0",
"s": "Khác"
},
{
"t": "Vunce Upon A Time",
"id": "ZpiGLWEdRnw",
"s": "Khác"
},
{
"t": "Good Night, Gorilla",
"id": "wPDfVTqz04c",
"s": "Khác"
},
{
"t": "Curious George Visits the Zoo",
"id": "0PxBfv_7t2s",
"s": "Curious George"
},
{
"t": "Curious George Goes Camping",
"id": "6HlpyvJZPXM",
"s": "Curious George"
},
{
"t": "Curious George and the Dinosaur | Dinosaurs for Kids",
"id": "iFtr1WiPAfs",
"s": "Curious George"
},
{
"t": "Curious George and the Birthday Surprise",
"id": "Yq02zALi3AQ",
"s": "Curious George"
},
{
"t": "Curious George Visits a Toy Store",
"id": "WTzL6LXyzuM",
"s": "Curious George"
},
{
"t": "Curious George Visits an Amusement Park",
"id": "bM15UJ5cOkc",
"s": "Curious George"
},
{
"t": "Curious George Goes To The Hospital",
"id": "OidDYW0vr7U",
"s": "Curious George"
},
{
"t": "Curious George Goes To School",
"id": "oCMpJpYX9Lg",
"s": "Curious George"
},
{
"t": "Noah’s Bark",
"id": "Q2vLIn6Y6nE",
"s": "Khác"
},
{
"t": "My Daddy Snores",
"id": "aLQvCXv6mOk",
"s": "Khác"
},
{
"t": "Cloudy With A Chance of Meatballs",
"id": "uTkKBt-9hfA",
"s": "Khác"
},
{
"t": "Alexander, Who’s Not (Do you hear me? I mean it!) Going to Move",
"id": "rU4vY8DTL6M",
"s": "Khác"
},
{
"t": "HICCUPotomus",
"id": "ufOsoDQ6a1k",
"s": "Khác"
},
{
"t": "Disney’s Pocahontas",
"id": "hkqa6eLz8S4",
"s": "Disney"
},
{
"t": "Do Not Open this Book | Kids Books Read Aloud for Children",
"id": "nbI5-L3shis",
"s": "Khác"
},
{
"t": "One Cool Friend",
"id": "IlSMS55-EoA",
"s": "Khác"
},
{
"t": "Morris Goes To School",
"id": "CSrS-kV0E-k",
"s": "Khác"
},
{
"t": "Hoy He Sido Pirata (I Was A Pirate Today) Bilingual",
"id": "KophD12yT3s",
"s": "Khác"
},
{
"t": "Fancy Nancy Poet Extraordinaire!",
"id": "9Hex6STZ4Eg",
"s": "Fancy Nancy"
},
{
"t": "Fancy Nancy Heart to Heart (a VALENTINE story)",
"id": "6Momq780jjA",
"s": "Fancy Nancy"
},
{
"t": "Alicia El Hada (Spanish Book)",
"id": "CVm-AcskGQA",
"s": "Khác"
},
{
"t": "Abuela (Grandma) SPANISH/ENGLISH",
"id": "WPtYwq503mc",
"s": "Khác"
},
{
"t": "Kippi & The Missing Matzah",
"id": "QQ3Ur18Kij4",
"s": "Khác"
},
{
"t": "There Was An Old Lady Who Swallowed A Shell",
"id": "cv8J4o8DoyU",
"s": "Khác"
},
{
"t": "There Was An Old Lady Who Swallowed A Bell",
"id": "JR0iB7n_Lx0",
"s": "Khác"
},
{
"t": "Fancy Nancy At The Museum",
"id": "szjS1Yrhb6Q",
"s": "Fancy Nancy"
},
{
"t": "My Friends",
"id": "hPIEgPic04M",
"s": "Khác"
},
{
"t": "Pinocchio | DISNEY STORYBOOK",
"id": "zJ6h8YD3Kl4",
"s": "Disney"
},
{
"t": "The Jungle Book",
"id": "Utjr9Mb_NDo",
"s": "Khác"
},
{
"t": "The Lion King STORYBOOK",
"id": "N-xoRBioy9g",
"s": "Khác"
},
{
"t": "There Was An Old Lady Who Swallowed A Chick",
"id": "D-jkYzaSFB0",
"s": "Khác"
},
{
"t": "My Pony",
"id": "pc_rdhZtNAo",
"s": "Khác"
},
{
"t": "I’m Going to be the Best Princess Ever",
"id": "IJaKCLV_bW4",
"s": "Khác"
},
{
"t": "Peter Pan en Español",
"id": "c1YUdxV76jQ",
"s": "Khác"
},
{
"t": "Sesame Street: Watch Out for Banana Peels and Other Important Sesame Safety Tips",
"id": "68DhzLVkE9k",
"s": "Khác"
},
{
"t": "The Dumb Bunnies",
"id": "bzAQhVB_R14",
"s": "Khác"
},
{
"t": "Say Hello to Zorro",
"id": "oNI4GqJY7V0",
"s": "Khác"
},
{
"t": "Happy Easter, Baby",
"id": "qGkmWWPQe5Q",
"s": "Khác"
},
{
"t": "The Story of the Easter Bunny | Kids Book READ ALOUD for Easter!",
"id": "vAYsq4fYkAs",
"s": "Khác"
},
{
"t": "Ollie’s Easter Eggs",
"id": "q9LF1g2cNIM",
"s": "Khác"
},
{
"t": "Any Old Junk Today",
"id": "Iizzj57MqEE",
"s": "Khác"
},
{
"t": "Mickey Mouse: The Brave Little Tailor",
"id": "izscqiLB-xw",
"s": "Disney"
},
{
"t": "Pinocchio: Donkey Fever",
"id": "IHTcgqTpUQc",
"s": "Khác"
},
{
"t": "Chip & Dale: A Nutty Trip to the Zoo",
"id": "yKN4GT6N-4g",
"s": "Khác"
},
{
"t": "Mr Murdle’s Large Heart",
"id": "FWZw1vE8bJc",
"s": "Khác"
},
{
"t": "Mickey Mouse: The Sorcerer’s Apprentice",
"id": "GAC6Q3075Yo",
"s": "Disney"
},
{
"t": "Dinosaur Deals | Dinosaurs for Kids READ ALOUD! (a MathStart book!)",
"id": "p5zcxoDXZbM",
"s": "Khác"
},
{
"t": "Short Adventures of a Loooong Dog",
"id": "9aO9P2q-2aA",
"s": "Khác"
},
{
"t": "ZOOM! ZOOM! Sounds of Things That Go In The City!",
"id": "8RlH6Q6OSiA",
"s": "Khác"
},
{
"t": "CLANG! CLANG! BEEP! BEEP! Listen to the City",
"id": "HStvWQ2kpsU",
"s": "Khác"
},
{
"t": "I Remember Abuelito/Yo Recuerdo a Abuelito: A Story About Día de los Muertos",
"id": "kXf-RFqmCyQ",
"s": "Khác"
},
{
"t": "The Bully Blockers Club",
"id": "ZGb5Y0DtfoE",
"s": "Khác"
},
{
"t": "Halloween Loooong Dog",
"id": "GPB_DWm705A",
"s": "Khác"
},
{
"t": "There Was An Old Mummy Who Swallowed A Spider",
"id": "AD1BotXvms8",
"s": "Khác"
},
{
"t": "Good Night, Baddies",
"id": "bVd-KspX3tQ",
"s": "Khác"
}
];

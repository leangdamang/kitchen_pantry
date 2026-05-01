// ── PANTRY CATEGORY MAP ───────────────────────────────────────────────────────
// Edit this file to add, remove, or recategorize ingredients.
// Each key is a category name. Each value is an array of ingredient keywords.
// The app matches item names against these keywords (partial match supported).
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORY_MAP = {

  Produce: [
    'apple','banana','orange','lemon','lime','grape','strawberry','blueberry',
    'mango','avocado','tomato','onion','garlic','shallot','ginger','potato',
    'sweet potato','carrot','celery','broccoli','cauliflower','spinach','kale',
    'lettuce','arugula','cabbage','napa cabbage','zucchini','squash','eggplant',
    'pepper','bell pepper','jalapeño','jalapeno','serrano','cucumber','mushroom',
    'shiitake','enoki','king oyster','oyster mushroom','asparagus','corn','pea',
    'beet','radish','daikon','leek','fennel','scallion','bok choy','yu choy',
    'gai lan','chinese broccoli','water spinach','morning glory','taro','yam',
    'lotus root','bamboo shoot','bean sprout','snow pea','sugar snap pea',
    'edamame','perilla','shiso','thai basil','vietnamese coriander','rau ram',
    'lemongrass','galangal','kaffir lime','makrut lime','pandan','banana blossom',
    'jackfruit','durian','rambutan','lychee','longan','dragonfruit','guava',
    'papaya','starfruit','basil','cilantro','parsley','mint','thyme','rosemary',
    'dill','chive','sage','peach','pear','watermelon','kiwi','fig','plum',
    'cherry','pineapple','raspberry','herbs','green onion','spring onion',
    'chili','bird eye chili','thai chili','Korean chili'
  ],

  Protein: [
    'chicken','beef','pork','lamb','turkey','duck','veal','quail','bison',
    'salmon','tuna','cod','tilapia','halibut','sea bass','snapper','mackerel',
    'yellowtail','hamachi','shrimp','prawns','crab','lobster','scallop','clam',
    'mussel','oyster','anchovy','sardine','squid','octopus','cuttlefish',
    'abalone','sea urchin','uni','roe','tobiko','ikura','fish cake','fishcake',
    'surimi','crab stick','tofu','firm tofu','silken tofu','soft tofu',
    'fried tofu','tofu puffs','aburaage','tempeh','seitan','natto','egg',
    'century egg','salted egg','bacon','ham','sausage','lap cheong','chinese sausage',
    'char siu','ground beef','ground pork','ground turkey','ground chicken',
    'steak','fish','pork belly','short rib','oxtail','tripe','liver'
  ],

  Dairy: [
    'milk','butter','cream','heavy cream','sour cream','cream cheese','ricotta',
    'mozzarella','cheddar','parmesan','gruyere','brie','gouda','feta',
    'goat cheese','blue cheese','yogurt','greek yogurt','kefir','ghee',
    'half and half','cottage cheese','mascarpone','cheese','whipped cream',
    'ice cream','condensed milk','evaporated milk'
  ],

  Pantry: [
    // Baking & basics
    'flour','sugar','brown sugar','salt','oil','olive oil','vegetable oil',
    'coconut oil','sesame oil','chili oil','vinegar','balsamic','rice vinegar',
    'black vinegar','chinkiang vinegar','apple cider vinegar','white vinegar',
    'baking soda','baking powder','cornstarch','tapioca starch','potato starch',
    'arrowroot','cocoa','chocolate','vanilla','yeast',

    // Broths & canned
    'broth','stock','chicken broth','beef broth','vegetable broth',
    'dashi','kombu dashi','chicken stock','tomato paste','tomato sauce',
    'canned tomatoes','coconut milk','coconut cream',

    // Western grains & pasta
    'pasta','spaghetti','penne','rigatoni','fettuccine','linguine','lasagna',
    'breadcrumbs','oats','oatmeal','granola','cereal','crackers','bread',
    'tortilla','pita','flour tortilla',

    // Rice
    'rice','white rice','brown rice','jasmine rice','basmati rice',
    'sushi rice','short grain rice','glutinous rice','sticky rice',
    'black rice','forbidden rice','rice flour','glutinous rice flour',

    // Asian noodles
    'noodles','ramen','ramen noodles','soba','udon','somen','glass noodles',
    'cellophane noodles','mung bean noodles','rice noodles','rice vermicelli',
    'pho noodles','ho fun','wide rice noodles','chow mein noodles',
    'egg noodles','lo mein','shirataki','konjac noodles','naengmyeon',
    'dangmyeon','sweet potato noodles','couscous','quinoa','polenta','farro',

    // Legumes
    'lentils','beans','black beans','chickpeas','kidney beans','cannellini',
    'edamame','soybeans','adzuki beans','mung beans','dried lentils',

    // Asian pantry staples
    'dried shiitake','dried mushroom','wood ear mushroom','lily bud',
    'dried tofu skin','yuba','dried bean curd','vermicelli','wonton wrapper',
    'dumpling wrapper','gyoza wrapper','spring roll wrapper','rice paper',
    'seaweed','nori','kombu','wakame','hijiki','dried seaweed','agar agar',
    'bonito flakes','katsuobushi','dried shrimp','dried scallop','dried fish',
    'panko','japanese breadcrumbs',

    // Sweeteners & condiments base
    'honey','maple syrup','molasses','jam','jelly','peanut butter',
    'almond butter','tahini',

    // Nuts & seeds
    'almonds','walnuts','pecans','cashews','pistachios','pine nuts',
    'sesame seeds','white sesame','black sesame','sunflower seeds',
    'pumpkin seeds','chia','flaxseed','raisins','dried fruit','dried cranberries',

    // Cooking essentials
    'mustard','ketchup','mayonnaise','japanese mayo','kewpie'
  ],

  Spice: [
    // Western spices
    'cumin','coriander','turmeric','paprika','smoked paprika','cayenne',
    'chili powder','cinnamon','nutmeg','cloves','cardamom','allspice',
    'bay leaf','oregano','fennel seed','mustard seed','caraway','anise',
    'saffron','italian seasoning','herbs de provence','old bay',
    'garlic powder','onion powder','celery salt','black pepper','white pepper',
    'red pepper flakes','chili flakes',

    // Chinese spices
    'star anise','five spice','chinese five spice','sichuan pepper',
    'sichuan peppercorn','dried chili','dried tangerine peel','sand ginger',
    'white cardamom','tsao ko','cao guo',

    // Japanese spices & blends
    'shichimi','togarashi','shichimi togarashi','furikake','wasabi powder',
    'matcha','yuzu powder','yuzu kosho',

    // Korean spices
    'gochugaru','korean chili flakes','korean chili powder','doenjang powder',

    // Southeast Asian spices
    'lemongrass powder','galangal powder','kaffir lime powder',
    'makrut lime leaf','dried lemongrass','dried galangal',

    // South Asian & cross-regional
    'sumac','za\'atar','zaatar','berbere','ras el hanout','garam masala',
    'curry powder','curry leaves','fenugreek','ajwain','asafoetida','hing',
    'tamarind powder','amchur','dried mango powder',

    // Seasoning blends
    'seasoning salt','seasoning','msg','umami powder','dashi powder',
    'bonito powder','kombu powder','mushroom powder'
  ],

  'Sauce/Condiment': [
    // Korean
    'gochujang','doenjang','ssamjang','ganjang','korean soy sauce',
    'perilla oil','sesame oil','korean sesame oil',

    // Japanese
    'soy sauce','shoyu','tamari','ponzu','teriyaki','mirin','sake',
    'rice wine','miso','white miso','red miso','mixed miso','shiro miso',
    'aka miso','dashi soy','mentsuyu','tsuyu','tonkatsu sauce','okonomiyaki sauce',
    'takoyaki sauce','japanese mayo','kewpie','wasabi','pickled ginger','gari',
    'furikake','bonito flakes','katsuobushi',

    // Chinese
    'hoisin','oyster sauce','black bean sauce','doubanjiang','bean paste',
    'chili bean paste','tianmian sauce','sweet bean sauce','char siu sauce',
    'plum sauce','duck sauce','chinese bbq sauce','xo sauce',
    'chiu chow chili oil','lao gan ma','black vinegar','chinkiang',
    'shaoxing wine','shaoxing','chinese cooking wine','rice wine vinegar',
    'sesame paste','chinese sesame paste',

    // Southeast Asian
    'fish sauce','thai fish sauce','vietnamese fish sauce','nuoc mam',
    'nam pla','shrimp paste','belacan','kapi','sambal','sambal oelek',
    'sambal belacan','sweet chili sauce','thai sweet chili','pad thai sauce',
    'satay sauce','peanut sauce','coconut aminos','galangal paste',
    'lemongrass paste','tom yum paste','green curry paste','red curry paste',
    'yellow curry paste','massaman paste','panang paste','laksa paste',
    'rendang paste',

    // Vietnamese
    'hoisin sauce','sriracha','tuong ot','chili garlic sauce',

    // Western & cross-regional
    'harissa','tahini','hummus','pesto','salsa','guacamole','chimichurri',
    'tzatziki','aioli','barbecue sauce','bbq sauce','buffalo sauce','ranch',
    'caesar','balsamic glaze','chutney','relish','pickle','capers','olives',
    'sun dried tomatoes','dijon','whole grain mustard','horseradish',
    'tabasco','cholula','frank\'s','hot sauce','worcestershire',
    'coconut aminos'
  ],

  Frozen: [
    'frozen','ice cream','frozen vegetables','frozen fruit','frozen peas',
    'frozen corn','frozen edamame','frozen spinach','frozen pizza',
    'frozen meals','frozen burritos','frozen waffles','frozen fries',
    'frozen shrimp','frozen fish','frozen chicken','frozen dumplings',
    'frozen gyoza','frozen potstickers','frozen dim sum','frozen soup dumplings',
    'frozen bao','frozen mochi','frozen spring rolls','frozen egg rolls'
  ]

};

// ── REVERSE LOOKUP (auto-generated — do not edit) ─────────────────────────────
const WORD_TO_CAT = {};
Object.entries(CATEGORY_MAP).forEach(([cat, words]) => {
  words.forEach(w => { WORD_TO_CAT[w.toLowerCase()] = cat; });
});

function guessCategory(name) {
  const lower = name.toLowerCase();
  if (WORD_TO_CAT[lower]) return WORD_TO_CAT[lower];
  for (const [word, cat] of Object.entries(WORD_TO_CAT)) {
    if (lower.includes(word) || word.includes(lower)) return cat;
  }
  return 'Other';
}

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
    'pepper','bell pepper','jalapeño','jalapeno','serrano','poblano','habanero',
    'pasilla','ancho','chipotle fresh','cucumber','mushroom','porcini','chanterelle',
    'shiitake','enoki','king oyster','oyster mushroom','asparagus','corn','pea',
    'beet','radish','daikon','leek','fennel','scallion','bok choy','yu choy',
    'gai lan','chinese broccoli','water spinach','morning glory','taro','yam',
    'lotus root','bamboo shoot','bean sprout','snow pea','sugar snap pea',
    'edamame','perilla','shiso','thai basil','vietnamese coriander','rau ram',
    'lemongrass','galangal','kaffir lime','makrut lime','pandan','banana blossom',
    'jackfruit','durian','rambutan','lychee','longan','dragonfruit','guava',
    'papaya','starfruit','basil','cilantro','parsley','mint','thyme','rosemary',
    'dill','chive','sage','tarragon','chervil','sorrel','lavender','marjoram',
    'savory','peach','pear','watermelon','kiwi','fig','plum','cherry',
    'pineapple','raspberry','blackberry','pomegranate','quince','apricot',
    'nectarine','blood orange','clementine','grapefruit','herbs',
    'green onion','spring onion','chili','bird eye chili','thai chili',
    'Korean chili','tomatillo','epazote','huitlacoche','cactus','nopal',
    'jicama','chayote','plantain','radicchio','endive','frisee','watercress',
    'purslane','artichoke','rapini','broccoli rabe','swiss chard','broccolini',
    'celery root','celeriac','parsnip','turnip','rutabaga','kohlrabi',
    'shallot','cipollini','ramps','wild garlic','black garlic','elephant garlic'
  ],

  Protein: [
    // Meat
    'chicken','beef','pork','lamb','turkey','duck','veal','quail','bison',
    'rabbit','venison','goat','oxtail','tripe','liver','sweetbreads',
    'pork belly','short rib','chuck','brisket','ribeye','sirloin','tenderloin',
    'prosciutto','pancetta','guanciale','lardo','bresaola','speck','mortadella',
    'salami','coppa','nduja','chorizo','mexican chorizo','spanish chorizo',
    'longaniza','carnitas','birria','barbacoa','al pastor',
    'bacon','ham','sausage','lap cheong','chinese sausage','char siu',
    'ground beef','ground pork','ground turkey','ground chicken','ground lamb',
    'steak','fish',

    // Seafood
    'salmon','tuna','cod','tilapia','halibut','sea bass','branzino','dorade',
    'snapper','mackerel','yellowtail','hamachi','sardine','anchovy','anchovy fillet',
    'shrimp','prawns','crab','lobster','scallop','clam','vongole','mussel',
    'oyster','squid','calamari','octopus','cuttlefish','abalone',
    'sea urchin','uni','roe','tobiko','ikura','fish cake','fishcake','surimi',

    // Plant protein
    'tofu','firm tofu','silken tofu','soft tofu','fried tofu','tofu puffs',
    'aburaage','tempeh','seitan','natto','egg','century egg','salted egg'
  ],

  Dairy: [
    'milk','butter','cream','heavy cream','sour cream','cream cheese','ricotta',
    'mozzarella','burrata','stracciatella','cheddar','parmesan','parmigiano',
    'pecorino','pecorino romano','grana padano','asiago','fontina','taleggio',
    'gruyere','emmental','comte','beaufort','reblochon','camembert','brie',
    'roquefort','gouda','feta','halloumi','manchego','goat cheese','chevre',
    'blue cheese','gorgonzola','stilton','yogurt','greek yogurt','labneh',
    'creme fraiche','double cream','kefir','ghee','half and half',
    'cottage cheese','mascarpone','cheese','whipped cream','ice cream',
    'condensed milk','evaporated milk','queso fresco','queso blanco',
    'cotija','oaxaca cheese','crema mexicana','mexican crema'
  ],

  Pantry: [
    // Baking & basics
    'flour','00 flour','semolina','semolina flour','bread flour','whole wheat flour',
    'sugar','brown sugar','powdered sugar','salt','oil','olive oil','extra virgin olive oil',
    'vegetable oil','coconut oil','sesame oil','chili oil','truffle oil',
    'vinegar','balsamic','balsamic vinegar','red wine vinegar','white wine vinegar',
    'sherry vinegar','rice vinegar','black vinegar','chinkiang vinegar',
    'apple cider vinegar','white vinegar',
    'baking soda','baking powder','cornstarch','masa harina','corn flour',
    'tapioca starch','potato starch','arrowroot','cocoa','chocolate',
    'dark chocolate','vanilla','yeast','dry yeast','active dry yeast',

    // Broths & canned
    'broth','stock','chicken broth','beef broth','vegetable broth','fish stock',
    'dashi','kombu dashi','chicken stock','beef stock','tomato paste','tomato sauce',
    'crushed tomatoes','canned tomatoes','san marzano','passata','tomato puree',
    'coconut milk','coconut cream',

    // Italian pasta & grains
    'pasta','spaghetti','penne','rigatoni','fettuccine','linguine','lasagna',
    'tagliatelle','pappardelle','bucatini','orecchiette','farfalle','fusilli',
    'conchiglie','paccheri','mafaldine','casarecce','strozzapreti','cavatappi',
    'gnocchi','polenta','farro','spelt','arborio','carnaroli','vialone nano',
    'orzo','pastina','acini di pepe',

    // French & European grains
    'breadcrumbs','panko','japanese breadcrumbs','oats','oatmeal','granola',
    'cereal','crackers','bread','baguette','sourdough','brioche',
    'tortilla','pita','flour tortilla','corn tortilla','tostada','taco shell',

    // Rice
    'rice','white rice','brown rice','jasmine rice','basmati rice',
    'sushi rice','short grain rice','glutinous rice','sticky rice',
    'black rice','forbidden rice','rice flour','glutinous rice flour',
    'arborio rice','risotto rice',

    // Asian noodles
    'noodles','ramen','ramen noodles','soba','udon','somen','glass noodles',
    'cellophane noodles','mung bean noodles','rice noodles','rice vermicelli',
    'pho noodles','ho fun','wide rice noodles','chow mein noodles',
    'egg noodles','lo mein','shirataki','konjac noodles','naengmyeon',
    'dangmyeon','sweet potato noodles','couscous','quinoa',

    // Legumes
    'lentils','green lentils','french lentils','puy lentils','red lentils',
    'beans','black beans','pinto beans','refried beans','chickpeas','garbanzo',
    'kidney beans','cannellini','white beans','borlotti','cranberry beans',
    'navy beans','fava beans','edamame','soybeans','adzuki beans','mung beans',

    // Asian pantry staples
    'dried shiitake','dried mushroom','wood ear mushroom','lily bud',
    'dried tofu skin','yuba','dried bean curd','vermicelli','wonton wrapper',
    'dumpling wrapper','gyoza wrapper','spring roll wrapper','rice paper',
    'seaweed','nori','kombu','wakame','hijiki','dried seaweed','agar agar',
    'bonito flakes','katsuobushi','dried shrimp','dried scallop','dried fish',

    // Mediterranean & Middle Eastern pantry
    'dried chickpeas','dried fava','bulgur','freekeh','millet','amaranth',
    'pine nuts','pistachios','dried apricots','dates','preserved lemon',
    'harissa paste','rose water','orange blossom water',

    // Mexican pantry
    'dried chili','ancho chili','mulato chili','guajillo chili','chipotle',
    'chipotle in adobo','adobo sauce','dried pasilla','dried ancho',
    'mexican chocolate','piloncillo','lard','manteca','epazote dried',
    'dried oregano mexican','achiote','achiote paste','recado rojo',

    // Sweeteners & condiments base
    'honey','maple syrup','molasses','jam','jelly','peanut butter',
    'almond butter','tahini','nutella','hazelnut spread',

    // Nuts & seeds
    'almonds','walnuts','pecans','cashews','hazelnuts','macadamia',
    'pine nuts','sesame seeds','white sesame','black sesame','sunflower seeds',
    'pumpkin seeds','chia','flaxseed','raisins','dried fruit','dried cranberries',
    'capers','sun dried tomatoes','olives','kalamata olives','castelvetrano',
    'green olives','black olives','anchovy packed','anchovies in oil',

    // Cooking essentials
    'mustard','dijon mustard','whole grain mustard','ketchup','mayonnaise',
    'japanese mayo','kewpie','worcestershire','tabasco','hot sauce'
  ],

  Spice: [
    // Italian
    'oregano','dried oregano','basil dried','dried basil','rosemary dried',
    'thyme dried','sage dried','marjoram','savory','fennel seed','fennel pollen',
    'red pepper flakes','chili flakes','italian seasoning','herbes de provence',
    'herbs de provence','bay leaf','nutmeg','cloves','cinnamon',

    // French
    'tarragon dried','chervil dried','lavender dried','herbes de provence',
    'quatre epices','espelette pepper','piment d espelette','fines herbes',
    'bouquet garni','mixed spice',

    // Mediterranean & Middle Eastern
    'sumac','za\'atar','zaatar','dukkah','ras el hanout','baharat','berbere',
    'harissa spice','aleppo pepper','urfa biber','mahleb','nigella seed',
    'black seed','kalonji','dried mint','dried rose','dried lavender',
    'saffron','caraway','anise','star anise','cardamom','allspice',

    // Mexican
    'cumin','dried cumin','coriander seed','chili powder','ancho powder',
    'guajillo powder','chipotle powder','pasilla powder','mulato powder',
    'smoked paprika','paprika','cayenne','epazote dried','mexican oregano',
    'achiote powder','annatto','canela','mexican cinnamon','piloncillo ground',
    'dried chili powder','tajin','chamoy spice',

    // Western general
    'garlic powder','onion powder','celery salt','black pepper','white pepper',
    'pink peppercorn','green peppercorn','mustard seed','caraway seed',
    'poppy seed','sesame','old bay','celery seed',

    // Chinese spices
    'five spice','chinese five spice','sichuan pepper','sichuan peppercorn',
    'dried tangerine peel','sand ginger','white cardamom','tsao ko',

    // Japanese spices & blends
    'shichimi','togarashi','shichimi togarashi','furikake','wasabi powder',
    'matcha','yuzu powder','yuzu kosho',

    // Korean spices
    'gochugaru','korean chili flakes','korean chili powder','doenjang powder',

    // Southeast Asian spices
    'lemongrass powder','galangal powder','kaffir lime powder',
    'makrut lime leaf','dried lemongrass','dried galangal','turmeric',

    // South Asian
    'garam masala','curry powder','curry leaves','fenugreek','ajwain',
    'asafoetida','hing','tamarind powder','amchur','dried mango powder',

    // Seasoning blends & umami
    'seasoning salt','seasoning','msg','umami powder','dashi powder',
    'bonito powder','kombu powder','mushroom powder'
  ],

  'Sauce/Condiment': [
    // Italian
    'pesto','basil pesto','pesto rosso','red pesto','arrabbiata','marinara',
    'amatriciana','carbonara','aglio e olio','salsa verde italian','gremolata',
    'bagna cauda','anchovy paste','truffle paste','nduja','colatura',
    'italian dressing','caesar dressing','caesar',

    // French
    'bechamel','hollandaise','bearnaise','veloute','bordelaise','remoulade',
    'sauce vierge','tapenade','tapenade noir','tapenade verde','anchoiade',
    'dijon','whole grain mustard','french dressing','vinaigrette',
    'creme fraiche sauce','demi glace','espagnole',

    // Mediterranean & Middle Eastern
    'harissa','tahini','hummus','baba ganoush','muhammara','chermoula',
    'zhug','skordalia','toum','garlic sauce','tzatziki','cacik','labneh sauce',
    'preserved lemon','pomegranate molasses','date syrup','pomegranate paste',
    'sumac dressing','za\'atar oil','olive tapenade','roasted pepper','ajvar',

    // Mexican
    'salsa','salsa roja','salsa verde','salsa cruda','pico de gallo',
    'guacamole','mole','mole negro','mole rojo','mole poblano','mole verde',
    'pipian','adobo sauce','chipotle in adobo','recado','escabeche',
    'crema mexicana','mexican crema','tomatillo sauce','enchilada sauce',
    'chile sauce','hot sauce mexican','valentina','tapatia','cholula',
    'maggi sauce','worcestershire mexican','chamoy','tajin sauce',

    // Korean
    'gochujang','doenjang','ssamjang','ganjang','korean soy sauce',
    'perilla oil','korean sesame oil',

    // Japanese
    'soy sauce','shoyu','tamari','ponzu','teriyaki','mirin','sake',
    'rice wine','miso','white miso','red miso','mixed miso','shiro miso',
    'aka miso','mentsuyu','tsuyu','tonkatsu sauce','okonomiyaki sauce',
    'takoyaki sauce','japanese mayo','kewpie','wasabi','pickled ginger','gari',

    // Chinese
    'hoisin','oyster sauce','black bean sauce','doubanjiang','bean paste',
    'chili bean paste','char siu sauce','plum sauce','duck sauce',
    'xo sauce','lao gan ma','chinkiang','shaoxing wine','shaoxing',
    'chinese cooking wine','sesame paste',

    // Southeast Asian
    'fish sauce','thai fish sauce','nuoc mam','nam pla','shrimp paste',
    'belacan','sambal','sambal oelek','sweet chili sauce','pad thai sauce',
    'satay sauce','peanut sauce','coconut aminos','tom yum paste',
    'green curry paste','red curry paste','yellow curry paste',
    'massaman paste','laksa paste','rendang paste',

    // Western cross-regional
    'chimichurri','aioli','barbecue sauce','bbq sauce','buffalo sauce','ranch',
    'balsamic glaze','chutney','relish','pickle','capers','olives',
    'kalamata olives','castelvetrano olives','sun dried tomatoes',
    'horseradish','tabasco','frank\'s','worcestershire','coconut aminos',
    'sesame oil','sriracha','chili garlic sauce','hot sauce'
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

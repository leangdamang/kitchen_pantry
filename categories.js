// ── PANTRY CATEGORY MAP ───────────────────────────────────────────────────────
// Edit this file to add, remove, or recategorize ingredients.
// Each key is a category name. Each value is an array of ingredient keywords.
// The app matches item names against these keywords (partial match supported).
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORY_MAP = {

  

  Protein: [
    'chicken','beef','pork','lamb','turkey','duck','veal','quail','bison',
    'rabbit','venison','goat','oxtail','tripe','liver','sweetbreads',
    'pork belly','short rib','chuck','brisket','ribeye','sirloin','tenderloin',
    'prosciutto','pancetta','guanciale','lardo','bresaola','speck','mortadella',
    'salami','coppa','nduja','chorizo','mexican chorizo','spanish chorizo',
    'longaniza','carnitas','birria','barbacoa','al pastor',
    'bacon','ham','sausage','lap cheong','chinese sausage','char siu',
    'ground beef','ground pork','ground turkey','ground chicken','ground lamb',
    'steak','fish',
    'salmon','tuna','cod','tilapia','halibut','sea bass','branzino','dorade',
    'snapper','mackerel','yellowtail','hamachi','sardine','anchovy','anchovy fillet',
    'shrimp','prawns','crab','lobster','scallop','clam','vongole','mussel',
    'oyster','squid','calamari','octopus','cuttlefish','abalone',
    'sea urchin','uni','roe','tobiko','ikura','fish cake','fishcake','surimi',
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

  'Grains/Flour': [
    'flour','all purpose flour','00 flour','semolina','semolina flour',
    'bread flour','whole wheat flour','spelt flour','rye flour','buckwheat flour',
    'corn flour','masa harina','rice flour','glutinous rice flour',
    'tapioca flour','tapioca starch','potato starch','chickpea flour',
    'almond flour','oat flour','coconut flour','cassava flour',
    'rice','white rice','brown rice','jasmine rice','basmati rice',
    'sushi rice','short grain rice','glutinous rice','sticky rice',
    'black rice','forbidden rice','arborio','carnaroli','vialone nano',
    'arborio rice','risotto rice','farro','spelt','barley','pearl barley',
    'bulgur','freekeh','millet','amaranth','quinoa','teff','sorghum',
    'polenta','grits','cornmeal','wheat berries','kamut',
    'pasta','spaghetti','penne','rigatoni','fettuccine','linguine','lasagna',
    'tagliatelle','pappardelle','bucatini','orecchiette','farfalle','fusilli',
    'conchiglie','paccheri','mafaldine','casarecce','strozzapreti','cavatappi',
    'gnocchi','orzo','pastina','acini di pepe','couscous',
    'noodles','ramen','ramen noodles','soba','udon','somen','glass noodles',
    'cellophane noodles','mung bean noodles','rice noodles','rice vermicelli',
    'pho noodles','ho fun','wide rice noodles','chow mein noodles',
    'egg noodles','lo mein','shirataki','konjac noodles','naengmyeon',
    'dangmyeon','sweet potato noodles',
    'bread','baguette','sourdough','brioche','pita','tortilla',
    'flour tortilla','corn tortilla','tostada','taco shell','flatbread',
    'breadcrumbs','panko','japanese breadcrumbs','oats','oatmeal',
    'yeast','dry yeast','active dry yeast','baking soda','baking powder',
    'cornstarch','arrowroot'
  ],

  Vinegars: [
    'vinegar','white vinegar','distilled vinegar',
    'red wine vinegar','white wine vinegar','champagne vinegar',
    'sherry vinegar','apple cider vinegar','malt vinegar',
    'balsamic','balsamic vinegar','aged balsamic','balsamic glaze',
    'white balsamic','fig balsamic','truffle balsamic',
    'rice vinegar','rice wine vinegar','seasoned rice vinegar',
    'black vinegar','chinkiang vinegar','chinese black vinegar',
    'japanese rice vinegar','sushi vinegar',
    'coconut vinegar','cane vinegar','date vinegar','pomegranate vinegar',
    'tarragon vinegar','herb vinegar','flavored vinegar'
  ],

  Sweeteners: [
    'sugar','white sugar','granulated sugar','brown sugar','dark brown sugar',
    'light brown sugar','powdered sugar','confectioners sugar','caster sugar',
    'raw sugar','turbinado','demerara','muscovado',
    'honey','raw honey','manuka honey','maple syrup','agave','agave nectar',
    'molasses','blackstrap molasses','coconut sugar','palm sugar','date sugar',
    'monk fruit','stevia',
    'piloncillo','panela','jaggery','palm jaggery','rock sugar','chinese rock sugar',
    'corn syrup','golden syrup','treacle','simple syrup',
    'caramel sauce','dulce de leche','rose water syrup','lavender syrup',
    'pomegranate molasses','date syrup',
    'jam','jelly','preserves','marmalade','condensed milk','sweetened condensed milk'
  ],

  Pantry: [
    'oil','olive oil','extra virgin olive oil','vegetable oil','canola oil',
    'coconut oil','sesame oil','chili oil','truffle oil','avocado oil',
    'grapeseed oil','sunflower oil','peanut oil','walnut oil',
    'broth','stock','chicken broth','beef broth','vegetable broth','fish stock',
    'dashi','kombu dashi','chicken stock','beef stock','tomato paste','tomato sauce',
    'crushed tomatoes','canned tomatoes','san marzano','passata','tomato puree',
    'coconut milk','coconut cream',
    'lentils','green lentils','french lentils','puy lentils','red lentils',
    'beans','black beans','pinto beans','refried beans','chickpeas','garbanzo',
    'kidney beans','cannellini','white beans','borlotti','cranberry beans',
    'navy beans','fava beans','soybeans','adzuki beans','mung beans',
    'dried shiitake','dried mushroom','wood ear mushroom','lily bud',
    'dried tofu skin','yuba','dried bean curd','vermicelli','wonton wrapper',
    'dumpling wrapper','gyoza wrapper','spring roll wrapper','rice paper',
    'seaweed','nori','kombu','wakame','hijiki','dried seaweed','agar agar',
    'bonito flakes','katsuobushi','dried shrimp','dried scallop','dried fish',
    'dried chickpeas','dried fava','pine nuts','pistachios','dried apricots',
    'dates','preserved lemon','rose water','orange blossom water',
    'dried chili','ancho chili','mulato chili','guajillo chili','chipotle',
    'chipotle in adobo','adobo sauce','dried pasilla','dried ancho',
    'mexican chocolate','lard','manteca','achiote','achiote paste','recado rojo',
    'cocoa','chocolate','dark chocolate','vanilla','vanilla extract',
    'salt','kosher salt','sea salt','fleur de sel',
    'almonds','walnuts','pecans','cashews','hazelnuts','macadamia',
    'sesame seeds','white sesame','black sesame','sunflower seeds',
    'pumpkin seeds','chia','flaxseed','raisins','dried fruit','dried cranberries',
    'capers','sun dried tomatoes','olives','kalamata olives','castelvetrano',
    'green olives','black olives','anchovies in oil',
    'peanut butter','almond butter','tahini','nutella','hazelnut spread',
    'mustard','dijon mustard','whole grain mustard','ketchup','mayonnaise',
    'japanese mayo','kewpie','worcestershire','tabasco','hot sauce',
    'granola','cereal','crackers'
  ],

  Spice: [
    'oregano','dried oregano','basil dried','dried basil','rosemary dried',
    'thyme dried','sage dried','marjoram','savory','fennel seed','fennel pollen',
    'red pepper flakes','chili flakes','italian seasoning','bay leaf','nutmeg',
    'cloves','cinnamon','tarragon dried','chervil dried','lavender dried',
    'herbes de provence','herbs de provence','quatre epices','espelette pepper',
    'piment d espelette','fines herbes','bouquet garni',
    'sumac','zaatar','dukkah','ras el hanout','baharat','berbere',
    'harissa spice','aleppo pepper','urfa biber','mahleb','nigella seed',
    'black seed','kalonji','dried mint','saffron','caraway','anise',
    'star anise','cardamom','allspice',
    'cumin','coriander seed','chili powder','ancho powder','guajillo powder',
    'chipotle powder','pasilla powder','smoked paprika','paprika','cayenne',
    'mexican oregano','achiote powder','annatto','canela','mexican cinnamon','tajin',
    'garlic powder','onion powder','celery salt','black pepper','white pepper',
    'pink peppercorn','green peppercorn','mustard seed','caraway seed',
    'poppy seed','old bay','celery seed',
    'five spice','chinese five spice','sichuan pepper','sichuan peppercorn',
    'dried tangerine peel','sand ginger','white cardamom',
    'shichimi','togarashi','shichimi togarashi','furikake','wasabi powder',
    'matcha','yuzu powder','yuzu kosho',
    'gochugaru','korean chili flakes','korean chili powder',
    'lemongrass powder','galangal powder','kaffir lime powder',
    'makrut lime leaf','dried lemongrass','dried galangal','turmeric',
    'garam masala','curry powder','curry leaves','fenugreek','ajwain',
    'asafoetida','hing','tamarind powder','amchur',
    'seasoning salt','seasoning','msg','umami powder','dashi powder',
    'bonito powder','kombu powder','mushroom powder'
  ],

  'Sauce/Condiment': [
    'pesto','basil pesto','pesto rosso','red pesto','arrabbiata','marinara',
    'gremolata','bagna cauda','anchovy paste','truffle paste','colatura',
    'italian dressing','caesar dressing','caesar',
    'bechamel','hollandaise','bearnaise','veloute','bordelaise','remoulade',
    'tapenade','anchoiade','dijon','vinaigrette','demi glace',
    'harissa','hummus','baba ganoush','muhammara','chermoula','zhug',
    'skordalia','toum','tzatziki','labneh sauce','sumac dressing','ajvar',
    'salsa','salsa roja','salsa verde','pico de gallo','guacamole',
    'mole','mole negro','mole poblano','pipian','chipotle in adobo',
    'enchilada sauce','tomatillo sauce','valentina','cholula','chamoy',
    'gochujang','doenjang','ssamjang','ganjang','korean soy sauce','perilla oil',
    'soy sauce','shoyu','tamari','ponzu','teriyaki','mirin','sake','rice wine',
    'miso','white miso','red miso','shiro miso','aka miso',
    'mentsuyu','tsuyu','tonkatsu sauce','okonomiyaki sauce','kewpie',
    'wasabi','pickled ginger','gari',
    'hoisin','oyster sauce','black bean sauce','doubanjiang','bean paste',
    'char siu sauce','plum sauce','xo sauce','lao gan ma','shaoxing wine',
    'shaoxing','chinese cooking wine','sesame paste',
    'fish sauce','nuoc mam','nam pla','shrimp paste','belacan','sambal',
    'sambal oelek','sweet chili sauce','pad thai sauce','satay sauce',
    'peanut sauce','coconut aminos','tom yum paste','green curry paste',
    'red curry paste','yellow curry paste','massaman paste','laksa paste',
    'chimichurri','aioli','barbecue sauce','bbq sauce','buffalo sauce','ranch',
    'chutney','relish','pickle','capers','olives','kalamata olives',
    'castelvetrano olives','sun dried tomatoes','horseradish','tabasco',
    'worcestershire','sriracha','chili garlic sauce','hot sauce','sesame oil'
  ],

  Frozen: [
    'frozen','ice cream','frozen vegetables','frozen fruit','frozen peas',
    'frozen corn','frozen edamame','frozen spinach','frozen pizza',
    'frozen meals','frozen burritos','frozen waffles','frozen fries',
    'frozen shrimp','frozen fish','frozen chicken','frozen dumplings',
    'frozen gyoza','frozen potstickers','frozen dim sum','frozen soup dumplings',
    'frozen bao','frozen mochi','frozen spring rolls','frozen egg rolls'
  ],

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
    'korean chili','tomatillo','epazote','huitlacoche','cactus','nopal',
    'jicama','chayote','plantain','radicchio','endive','frisee','watercress',
    'purslane','artichoke','rapini','broccoli rabe','swiss chard','broccolini',
    'celery root','celeriac','parsnip','turnip','rutabaga','kohlrabi',
    'cipollini','ramps','wild garlic','black garlic','elephant garlic'
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

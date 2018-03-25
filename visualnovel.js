var preload = [
  "mum.png", "MumConcerned.png",
  "House1Wake.jpg", "House2LookUp.jpg", "House3BRoom.jpg", "House4Kitchen.jpg"
];

//preload images
var preloadObj = new Array(preload.length);
for (var i = 0; i < preload.length; i++)
{
    preloadObj[i] = new Image();
    preloadObj[i].src = preload[i];
}


var script;
var phil;
var mom;
var williamThoughts;

var textBlock;

function prepareNovel() {
    novel.imagePath = "images/";

    mom = new Character("Mom", {color: #ffd6ed});
    phil = new Character("Phil", {color: });
    william = new Character("William", {color: });
    williamThoughts = new Character("");

    script = [
        //wake up
        label, "start",
        scene, "House1Wake.jpg",
        williamThoughts, "You just woke up, but your head hurts and there&rsquo;s dissonant ringing in your ears.",
        label, "choice1",
        menu, [
            "",
            "Head down for Breakfast. Eggs will do the job.", [jump, "eggytime"],
            "Oral hygiene is a must. Brush teeth.", [jump, "bathroom"],
        ],

        //the eggs
        label, "eggytime",
        scene, "House2LookUp.jpg",

    ];
}

//preloading images and stuff
var preload = [
    "blep.jpg", "titlescreen.jpg",
    "awake.jpg", "lookup.jpg", "kitchen.png",
    "broomspooks.png", "broom.png", "broomspooksafter.png",
    "mum", "mum-gm.png", "Mum-Concern.png", "mum-sadaf.png",
    "closedegg.png", "openegg.png", "spookyegg.png",
    "outside.jpg", "moreoutside.png",
    "phoneon.jpg", "phoneoff.jpg",
];
var preloadObj = new Array(preload.length);
for (var i = 0; i < preload.length; i++)
{
    preloadObj[i] = new Image();
    preloadObj[i].src = preload[i];
}

var phil;
var mom;
var williamThoughts;

var script;
var textBlock;

function prepareNovel() {
    novel.imagePath = "images/";

    mom = new Character("Mom", {color: "#d66290"});
    phil = new Character("Phil", {color: "#4298f4"});
    william = new Character("Will", {color: "#000"});
    williamThoughts = new Character("");

    script = [
        //wake up
        label, "start",
        scene, "titlescreen.jpg",
        williamThoughts, "Click to begin...",
        scene, "awake.jpg",
        williamThoughts, "...",
        scene, "lookup.jpg",
        williamThoughts, "You just woke up, but your head hurts and there&rsquo;s dissonant ringing in your ears.",
        williamThoughts, "",
        menu, [
            "",
            "Head down for Breakfast. Eggs will do the job.", [jump, "breakfast"],
            "Oral hygiene is a must. Brush teeth.", [jump, "bathroom"],
        ],

        //bathroom spooks
        label, "bathroom",
        scene, "broom.png",
        williamThoughts, "...",
        scene, "broomspooks.png",
        williamThoughts, "Huh?",
        scene, "broomspooksafter.png",
        williamThoughts, "...",
        menu, [
            "",
            "ignore", [jump, ""],
            "", [jump, ""],
        ],

        //breakfast time, bois
        label, "breakfast",
        scene, "kitchen.jpg",
        williamThoughts, "You head down for breakfast.",
        scene, "mum-gm.png",
        mom, "Morning, Willy.",
        menu, [
            "&ldquo;Morning, Willy&ldquo;",
            "Nod acknowledgement and leave for work.", [jump, "outsidecar"],
            "Ignore her.", [jump, "eggytime"],
        ],

        //will leaves
        label, "outsidecar",
        scene, "Outside.jpg",
        williamThoughts, "You leave home.",
        scene, "moreoutside.jpg",
        williamThoughts, "...",
        scene, "", //spooky one
        williamThoughts, "What's happening",
        scene, "moreouside.jpg",
        williamThoughts, "That was weird.",
        menu, [
            "",
            "Cross the street.", [jump, "badending"],
            "You&rsquo;re not feeling right. Go home.", [jump, "phoneRings"],
        ],

        //hit by a car bad ending
        label, "badending",
        scene, "moreouside.jpg",
        williamThoughts, "",
        scene, "",
        williamThoughts, "",
        scene, "blep.jpg",
        williamThoughts, "You blacked out",
        menu, [
            "",
            "Try again?", [jump, "start"],
        ],

        // e g g y t i m e
        label, "eggytime",
        scene, "kitchen.jpg",
        williamThoughts, "You head to fridge and opens a carton of eggs.",
        scene, "ClosedEgg.png",
        williamThoughts, "...",
        scene, "OpenEgg.jpg",
        williamThoughts, "...",
        scene, "SpookyEgg.jpg",
        williamThoughts, "What the-",
        scene, "openegg.jpg",
        menu, [
            "...",
            "Make scrambled eggs.", [jump, "phoneRings"],
            "You're not feeling it anymore. Leave.", [jump, "outsidecar"],
        ],


        // the phone, the ohone is ringing
        label, "phoneRings",
        scene, "phoneoff.jpg",
        williamThoughts, "...",
        scene, "phoneon.jpg",
        menu, [
            "",
            "Answer the call", [jump, "goodEnding"],
            "Decline the call.", [jump, "phoneRings"],
        ],
        label, "goodEnding",
        williamThoughts, "...",
        scene, "phoneon.jpg",
        william, "...",
        william, "hello",
        phil, "Will?",
        william, "Hey Phil, i-is that... you?",
        phil, "Yeah, it&rsquo;s me, Phil. Listen to me Will. I miss you so much but I&rsquo;ll see you soon, all right? I promise, so just wait for me.",
        william, "I will, Phil. I'd do anything for you.",
        phil, "I&rsquo;ll see you later okay? I gotta go.",
        william, "No, wait-",
        scene, "phoneoff.jpg",
        williamThoughts, "...",
        scene, "mum-concern.png",
        mom, "Sweetheart, who were you talking to?",
        mom, "The phone lines have been down for days now.",
        scene, "",
        william, "I-I was just talking to Phil.",
        scene, "",
        mom, "Will, Phil has been dead for days. A-are you okay?",
        scene, "",
        william, "There&rsquo;s nothing wrong, mom.",
        scene, "",
        mom, "Will. You can tell me anything, I’m serious. I know Phil was close to you but this isn’t you.",
        scene, "",
        william, "Mom, h-he’s more than a friend.",
        scene, "",
        mom, "Honey, what do you mean?",
        william, "Phil… he and I are in love. He’s my first and last. He’s my forever, mom.",
        mom, "William…",
        william, "We’ll get married someday, live together, and die together. I love him so much, mom, you don’t understand.",
        mom, "Will dear… Phil is dead… He was in a car accident six days ago...",
        william, "No, that’s… not possible. I was just on the phone with him.",
        mom, "William, you can always talk to me.",
        william, "I mean… He… He was all I had. Phil was my hope and the reason for me to live… I... was bullied for years, mom. It felt like I was being pushed back into a corner and everything felt numb and hopeless. Phil… he saved me. He was the first to step up. I want him right now. I miss him so much.",
        mom, "God... Will, I understand. I love you so much. Thank you for telling me. You know you can always talk to me. I’m always here for you, you know that.",
        william, "Thanks, mom. I… actually feel a little better now. It felt like everything was bottling up inside me but I feel like everything’s lifted off my back.",
        mom, "I love you, dear.",
        william, "I love you too.",
        williamThoughts, "end.",
        menu, [
            "end.",
            "Play again?", [jump, "start"],
        ],
    ];
}

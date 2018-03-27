//vs-vine stuff
var preload = [
    "blep.jpg", "titlescreen.jpg", "easteregg.png",
    "awake.jpg", "lookup.jpg", "kitchen.png",
    "broomspooks.png", "broom.png", "broomspooksafter.png", "broomspooksb4.png",
    "mum.png", "mum-gm.png", "Mum-Concern.png", "mum-sadaf.png",
    "closedegg.png", "openegg.png", "spookyegg.png",
    "outside.png", "moreoutside.png",
    "phoneringing.png", "answerphone.png", "phoneoff.png", "phoneturnoff.png",
];
var preloadObj = new Array(preload.length);
for (var i = 0; i < preload.length; i++)
{
    preloadObj[i] = new Image();
    preloadObj[i].src = preload[i];
}

//char vars
var phil;
var mom;
var williamThoughts;
var turtleGods;
//move vars
var script;
var textBlock;

function prepareNovel() {
    novel.imagePath = "images/";

//chars
    mom = new Character("Mom", {color: "#d66290"});
    phil = new Character("Phil", {color: "#4298f4"});
    william = new Character("Will", {color: "#000"});
    williamThoughts = new Character("");
    turtleGods = new Character("TORT GOD", {color: "#1c9336"});

//the script
    script = [
        label, "start",
        scene, "titlescreen.jpg",
        williamThoughts, "Click to begin...",
        scene, "awake.jpg",
        williamThoughts, "...",
        scene, "lookup.jpg",
        williamThoughts, "You just woke up, your head hurts and there&rsquo;s dissonant ringing in your ears.",
        menu, [
            "",
            "Head down for Breakfast. Eggs will do the job.", [jump, "breakfast"],
            "Oral hygiene is a must. Brush teeth.", [jump, "bathroom"],
        ],

        //bathroom spooks
        label, "bathroom",
        scene, "broom.png",
        williamThoughts, "...",
        scene, "broomspooksb4.png",
        williamThoughts, "...",
        scene, "broomspooks.png",
        williamThoughts, "Huh?",
        scene, "broomspooksafter.png",
        williamThoughts, "...",
        menu, [
            "",
            "Ignore it. There&rsquo;s nothing there.", [jump, "leavebroomphone"],
            "Leave the room.", [jump, "breakfast"],
        ],

        //leaving the bathroom,,,, but his phone rings.
        label, "leavebroomphone",
        scene, "broom.png",
        williamThoughts, "You finish brushing your teeth and start walking towards the kitchen.",
        scene, "phoneringing.png",
        williamThoughts, "Your phone is ringing.",
        menu, [
            "",
            "Answer the call", [jump, "goodending"],
            "Decline the call.", [jump, "breakfast"],
        ],

        //breakfast time, bois
        label, "breakfast",
        scene, "kitchen.png",
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
        williamThoughts, "You leave home.",
        scene, "outside.png",
        williamThoughts, "...",
        menu, [
            "",
            "Cross the street.", [jump, "crossstreet"],
            "You&rsquo;re not feeling right. Go home.", [jump, "gohome"],
        ],

        // this dude got SMACKED by a ferrari over by a car
        label, "crossstreet",
        scene, "moreoutside.png",
        williamThoughts, "You decide to cross the street.",
        scene, "ferrari.png",
        williamThoughts, "...!",
        williamThoughts, "Your vision begins to fade.",
        scene, "blep.jpg",
        williamThoughts, "...",
        menu, [
            "End.",
            "Try again?", [jump, "start"],
        ],

        // e g g y t i m e
        label, "eggytime",
        scene, "kitchen.png",
        williamThoughts, "You head to the fridge and open a carton of eggs.",
        scene, "closedegg.png",
        williamThoughts, "...",
        scene, "openegg.png",
        williamThoughts, "...",
        scene, "spookyegg.png",
        williamThoughts, "What the-",
        scene, "openegg.png",
        menu, [
            "",
            "Make scrambled eggs.", [jump, "phoneRings"],
            "You&rsquo;re not feeling it anymore. Leave.", [jump, "outsidecar"],
        ],

        label, "gohome",
        williamThoughts, "On second thought, you decide to go back inside.",
        scene, "kitchen.png",
        williamThoughts, "...",

        // the phone, the ohone is ringing
        label, "phoneRings",
        scene, "phoneoff.png",
        williamThoughts, "...",
        scene, "phoneringing.png",
        williamThoughts, "...",
        menu, [
            "",
            "Answer the call", [jump, "goodending"],
            "Decline the call.", [jump, "phoneRings2"],
        ],//im lazy
        label, "phoneRings2",
        scene, "phoneoff.png",
        williamThoughts, "...",
        scene, "phoneringing.png",
        williamThoughts, "...",
        menu, [
            "",
            "Answer the call", [jump, "goodending"],
            "Decline the call.", [jump, "phoneRings3"],
        ],//and so tired
        label, "phoneRings3",
        scene, "phoneoff.png",
        williamThoughts, "...",
        scene, "phoneringing.png",
        williamThoughts, "...",
        menu, [
            "",
            "Answer the call", [jump, "goodending"],
            "Decline the call.", [jump, "easteregg"],
        ],

        //turtles, man
        label, "easteregg",
        scene, "phoneoff.png",
        williamThoughts, "...",
        scene, "easteregg.png",
        williamThoughts, "You&rsquo;ve disrespected the Tort God after ignoring your phone call seven times and he devours your entire body in one gulp.",
        menu, [
            "End.",
            "Try again.", [jump, "start"],
        ],

        //the official ending^tm
        label, "goodending",
        williamThoughts, "...",
        scene, "answerphone.png",
        william, "...",
        william, "Hello?",
        phil, "Will?",
        william, "Hey Phil, i-is that... you?",
        phil, "Yeah, it&rsquo;s me, Phil. Listen to me Will. I miss you so much but I&rsquo;ll see you soon, all right? I promise, so just wait for me.",
        william, "I will, Phil. I&rsquo;d do anything for you.",
        phil, "I&rsquo;ll see you later okay? I gotta go.",
        william, "No, wait-",
        scene, "phoneoff.png",
        williamThoughts, "...",
        scene, "mum-concern.png",
        mom, "Sweetheart, who were you talking to?",
        mom, "The phone lines have been down for days now.",
        william, "I-I was just talking to Phil.",
        mom, "Will, Phil has been dead for days. A-are you okay?",
        william, "There&rsquo;s nothing wrong, mom.",
        scene, "mum.png",
        mom, "Will. You can tell me anything, I’m serious. I know Phil was close to you but this isn’t you.",
        scene, "mum-concern.png",
        william, "Mom, h-he’s more than a friend.",
        mom, "Honey, what do you mean?",
        william, "Phil… he and I are in love. He’s my first and last. He’s my forever, mom.",
        mom, "William…",
        scene, "mum-sadaf.png",
        william, "We’ll get married someday, live together, and die together. I love him so much, mom, you don’t understand.",
        mom, "Will dear… Phil is dead… He was in a car accident six days ago...",
        william, "No, that’s… not possible. I was just on the phone with him.",
        mom, "William, you can always talk to me.",
        william, "I mean… He… He was all I had. Phil was my hope and the reason for me to live… I... was bullied for years, mom. It felt like I was being pushed back into a corner and everything felt numb and hopeless. Phil… he saved me. He was the first to step up. I want him right now. I miss him so much.",
        mom, "God... Will, I understand. I love you so much. Thank you for telling me. You know you can always talk to me. I’m always here for you, you know that.",
        william, "Thanks, mom. I… actually feel a little better now. It felt like everything was bottling up inside me but I feel like everything’s lifted off my back.",
        scene, "mum-gm.png",
        mom, "I love you, dear.",
        william, "I love you too.",
        williamThoughts, "end.",
        menu, [
            "End.",
            "Restart.", [jump, "start"],
        ],
    ];
}

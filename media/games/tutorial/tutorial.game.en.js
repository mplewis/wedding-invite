// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "https://github.com/mplewis/wedding-invite";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<p>(Are you in a hurry? <a target='_blank' href='https://mplewis.typeform.com/to/qKmZYf'>\
        Click here to skip straight to the info and RSVP.</a>)</p>\
        \
        <h1>Good morning!</h1>\
        \
        <p>It's 7 am on a Monday. You've just gotten up and you are <em>sleepy.</em> \
        Time to get your stuff together and grab some breakfast before work.</p> \
        \
        <p class='transient'>Are you a <a href='tea'>tea person</a> \
        or a <a href='coffee'>coffee person?</a></p>"
    ),

    tea: new undum.SimpleSituation(
        "<p>You put the kettle on the stove and turn on the burner. \
        Your brother grabbed you a box of Yorkshire Tea when he was \
        studying abroad in England. The box reads \
        <em>Let's Have a Proper Brew.</em> So British.</p> \
        <p>You put your slippers on and <a href='mail'> \
        walk to the front door to grab the mail.</a></p>"
    ),

    coffee: new undum.SimpleSituation(
        "<p>You grab the bag of Caribou Morning Blend out of the cupboard. \
        Your Significant Other doesn't want to deal with grinding their coffee, \
        so for now you're stuck with the pre-ground stuff. At least it isn't Starbucks. \
        <p>You put your slippers on and <a href='mail'> \
        walk to the front door to grab the mail.</a></p>"
    ),

    mail: new undum.SimpleSituation(
        "<p>Under your little brass mail slot, sitting on the doormat, are \
        three pieces of mail. You've got \
        a <a href='./junk' class='once'>glossy colorful mailer,</a> \
        a <a href='./bill' class='once'>boring white rectangle,</a> \
        and a <a href='invite'>little off-white square.</a></p>",
        {
            actions: {
                'junk':
                    "<p>The colorful mailer catches your eye. \
                    It turns out to be an ad for some kind of furniture store. \
                    It reads: </p> \
                    <p><em> \
                    Are you tired of real doors cluttering up where you open \
                    them and you actually go somewhere and you go into another \
                    room? \
                    <a href='https://www.youtube.com/watch?v=pxbsV8QWGic' target='_blank'>\
                    Get on down to Real Fake Doors!</a></em></p> \
                    <p>That's okay. You don't need any more fake doors right now.</p>",

                'bill':
                    "<p>The boring white rectangle is addressed to <em>Current Resident</em>. \
                    That’s never a good sign. You open the envelope to find a \
                    credit card offer inside. Looks like you might be eligible \
                    for a CapitalOne credit card. It comes with a $2,000 credit \
                    line and a 0% interest rate for 12 months!</p> \
                    <p>This might be more exciting if you didn't still \
                    have student loans.</p>"

            }
        }
    ),

    invite: new undum.SimpleSituation(
        "<p>The little square one seems nicer than the other two. The envelope is an \
        off-white color. Maybe eggshell, cream, or ivory? You're never quite sure.</p> \
        <p>The return adddress is in Minneapolis, Minnesota, and your name \
        and address have been hand-written on the front. You \
        <a href='openit'>open the letter to see what's inside.</a></p>"
    ),

    openit: new undum.SimpleSituation(
        "<h1>You are cordially invited to Matt and Anna Lewis's Celebrating \
        Getting Married Without Having A Wedding Party!</h1> \
        <p>Hey, it's from Matt and Anna Lewis. It looks like Anna changed \
        her last name – it used to be Seamon, right? A conveniently-timed \
        photograph <a href='photo'>falls out of the envelope.</a></p>"
    ),

    photo: new undum.SimpleSituation(
        "<div class='frame'><img class='framed' src='media/img/mattandanna.jpg'></div> \
        <p>As if by the magic of narrative exposition, you suddenly recall all the \
        backstory you ever wanted to know.</p> \
        <p>Anna is still in school, finishing up her last semester at the U of M. \
        She’s a biology major with a focus on genetics. \
        <p>Once she’s done with school in Minnesota, Anna will be going to the \
        University of Colorado-Denver to get a professional degree in pharmacy.</p> \
        <p>Matt is a computer engineer. He works at Punch Through doing \
        Bluetooth stuff. Or app stuff. Or something. You’re never quite sure, \
        but he seems to be on his phone and computer 24/7.</p> \
        <p>When he was still in school, Matt was into all sorts of nerd groups like \
        Tesla Works, IEEE, and that engineering fraternity Triangle.</p> \
        <p class='transient'><a href='band'>Where did they meet again?</a></p>"
    ),

    band: new undum.SimpleSituation(
        "<p>Just then, another photo falls out of the envelope. They look \
        younger in this one.</p>\
        <div class='frame'><img class='framed' src='media/img/highschool.jpg'></div> \
        <p>Oh yeah. Anna and Matt met in high school band back in their \
        hometown of Wausau, WI. \
        Anna was an incoming freshman, and Matt was helping lead the marching \
        camp before school started that summer.</p> \
        \
        <p> Anna wasn't very talkative back then. She's pretty noisy now, though. \
        Maybe it's Matt's fault. \
        They started dating sometime in 2011. Anna insists it was August, \
        but Matt says they started dating in September.</p> \
        \
        <p>Hey, hang on. This is a wedding party. <span class='transient'> \
        Did you <a href='knew'>hear \
        about Anna and Matt getting married</a>, or is this <a href='didnt'>news \
        to you</a>?</span></p>"
    ),

    knew: new undum.SimpleSituation(
        "<p>That's right! They didn't tell anyone they were getting married \
        until they changed their statuses on Facebook. \
        Over 300 likes. The post wouldn’t leave your news feed for two days.</p> \
        \
        <p>So I guess since they’re married and all, you should probably \
        congratulate them. <a href='details'>What’s this about a party?</a></p>"
    ),

    didnt: new undum.SimpleSituation(
        "<p>Wow, they’re actually for-real married. And they had the nerve \
        to not tell you first!</p> \
        \
        <p>So I guess since they’re married and all, you should probably \
        congratulate them. <a href='details'>What’s this about a party?</a></p>"
    ),

    details: new undum.SimpleSituation(
        "<p>Near the bottom of the notecard, you spot a bunch of details. \
        \
        <div class='invite'><p> \
        We’re celebrating getting married! <br>\
        You’re invited because we like you. \
        </p><p><strong> \
        Saturday, May 21 <br>\
        8 PM to 2 AM <br>\
        Kieran’s Irish Pub <br> \
        85 N 6th St, Minneapolis, MN 55403 <br> \
        </strong></p><p> \
        We are buying beer and wine until Matt runs out of money.<br> \
        Food will also be available for purchase.<br> \
        Bring yourself and your friends. <br>\
        Dress casually. \
        </p></div> \
        \
        <p>Free booze and no stuffy suits? Sounds perfect. You've heard good \
        things about Kieran's, too.</p> \
        <p>There's a link to a website at the bottom of the card:</p>\
        <p><strong><a target='_blank' href='https://mplewis.typeform.com/to/qKmZYf'>\
        Click here to RSVP!\
        </a></strong></p>"
    ),
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

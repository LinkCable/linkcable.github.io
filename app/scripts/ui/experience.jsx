var React = require('react');

var Experience = React.createClass({

    render: function() {
        return (
            <div className="experience">
                <div className="header">
                    Experience
                </div>

                <div className="copy hbo">
                    <div className="para">
                        Over the past summer I had the opportunity to work in the Digital Products division of HBO.
                        During my time there I worked on an internal content management system which handled the banner
                        images displayed on HBOGo and HBONow. Most of my day to day involved working with React.js to
                        develop the front-end website. I also designed the main search function of the site from
                        UX to UI to the actual implementation.
                    </div>
                    <div className="para">
                        In addition to working on front end code, during my time at HBO I also led the design group of
                        Project HBO, an assignment given to the entire class of interns at the New York office. As the
                        design lead, I took charge in creating mockups and wireframes for potential features for HBO Now,
                        as well as designing all slides of the presentation to "look and feel" like HBO Now. I also
                        helped present the slideshow in front of 100+ HBO employees including SVPs and VPs of different
                        company divisions.
                    </div>
                </div>

                <div className="hidden-fade">
                    <div className="para">
                        Currently I serve as graphic designer for the Department of Computer Science at Stony Brook.
                        I am responsible for designing posters, web banners, print handouts, and the occasional white
                        board graffiti.
                    </div>
                    <div className="para">
                        You can see some of my designs down under my portfolio.
                    </div>
                </div>

                <div className="hidden-fade">
                    <div className="para">
                        I worked at SummerTech Computer Camps for several years between high school and my early years
                        of college. SummerTech is a coding camp dedicated to teaching children ages 8 to 16 code, animation,
                        film, and 3D Modeling. I actually attended as a kid and then became a counselor.
                    </div>
                    <div className="para">
                        When I worked at SummerTech, I first taught C++, then Java, then introduced Python into the coding
                        curriculum. After teaching code I moved on teaching 3D modeling. During my time there I taught
                        amazing students, from 10 year olds who coded up recursion in a day and a
                        teenager who built a 3D model of Gypsy Danger from Pacific Rim.
                    </div>
                </div>

                <div className="hidden-fade">
                    <div className="para">
                        I am currently a campus ambassador for Hackerrank, a website which allows you to practice your coding
                        skill and also test your mettle in competitions against programmers all over the world.
                    </div>
                    <div className="para">
                        As a campus ambassador, my duties involve advertising Hackerranks programming challenges to students
                        on campus, as well as organizing events for their competitions so that students can get together
                        and hack and enjoy some Hackerrank swag.
                    </div>
                </div>

                <div className="hidden-fade">
                    <div className="para">

                    </div>
                </div>
                <div
            </div>
        );
    }
});

module.exports = Experience;

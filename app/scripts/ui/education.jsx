var React = require('react');
var sbu, sbuLogo, efrei, efreiLogo, uos, uosLogo, last, lastCopy;;

var Education = React.createClass({

    getInitialState: function () {
        return {
            school: "sbu"
        };
    },

    componentDidMount: function() {
        sbu = React.findDOMNode(this.refs.sbu);
        sbuLogo = React.findDOMNode(this.refs.sbuLogo);

        efrei = React.findDOMNode(this.refs.efrei);
        efreiLogo = React.findDOMNode(this.refs.efreiLogo);

        uos = React.findDOMNode(this.refs.uos);
        uosLogo = React.findDOMNode(this.refs.uosLogo);

        last = React.findDOMNode(this.refs.sbuLogo);
        lastCopy = React.findDOMNode(this.refs.sbu);
    },

    onSchoolClick: function(e) {
        if (typeof this.props.onClick !== 'undefined') {
            this.props.onClick(e);
        }

        if(e.target.className.includes("sbu") === true){
            this.hideEverything(last, lastCopy, sbuLogo, sbu, "sbu");
        }

        if(e.target.className.includes("uos") === true){
            this.hideEverything(last, lastCopy, uosLogo, uos, "uos");
        }

        if(e.target.className.includes("efrei") === true){
            this.hideEverything(last, lastCopy, efreiLogo, efrei, "efrei");
        }

    },

    hideEverything: function(previous, previousCopy, clicked, clickedCopy, clickedString) {

        var previousString = previous.className.replace("logo logo-active", "");
        previous.className="logo logo-passive" + previousString;
        previousCopy.className="hidden-fade";

        clicked.className = "logo logo-active " + clickedString;
        clickedCopy.className = "copy " + clickedString;


        last = clicked;
        lastCopy = clickedCopy;
    },

    render: function() {

        return (
            <div className="page education">
                <div className="header">
                    Education
                </div>
                <div className="logos">
                    <div className="logo logo-passive efrei" onClick={this.onSchoolClick} ref="efreiLogo">
                    </div>
                    <div className = "plane-container">
                        <i className="fa fa-plane plane fa-rotate-225 left-plane" ref="leftPlane"></i>
                    </div>
                    <div className="logo logo-active sbu" onClick={this.onSchoolClick} ref="sbuLogo">
                    </div>
                    <div className = "plane-container">
                        <i className="fa fa-plane plane fa-rotate-45 right-plane" ref="rightPlane"></i>
                    </div>
                    <div className="logo logo-passive uos" onClick={this.onSchoolClick} ref="uosLogo">
                    </div>
                </div>
                <div className="hidden-fade" ref="efrei">
                    <p className="para">
                        EFREI was my first study abroad experience in Paris of Summer 2013. It only lasted a month,
                        but while I was there I took classes on Business Management, Software Design, and basic French.
                        (Je ne parle pas bien français)
                    </p>
                    <p className="para">
                        Of course, being in Paris I visited all the sights I could in the month I was there. The Eiffel
                        Tower, L'Arc de Triomphe, the McDonald's with the white "M", I saw it all. My personal favorite site,
                        however, was going up north to see the Grand Bé near Saint-Malo. The view of the changing tide
                        is just breathtaking.
                    </p>
                </div>

                <div className="copy sbu" ref="sbu">
                    <p className="para">
                        I'm currently attending Stony Brook University on Long Island, majoring in Computer
                        Science with minors in History (Asian concentration) and Digital Arts. I'm also a University
                        Scholar with a 3.80/4.00 GPA and in the Honors program for CS, which requires a greater than
                        3.5 GPA across all CS courses.
                    </p>
                    <p className="para">
                        Classes I've taken during my time here include Analysis of Algorithms with Steven Skiena,
                        Human-Computer Interaction, Operating Systems, Computer Architecture, Multimedia (Intro &
                        Advanced). I'm currently taking Networks, Databases, and Software Engineering.
                    </p>
                </div>
                <div className="hidden-fade" ref="uos">
                    <p className="para">
                        I studied at the University of Seoul of Korea in Fall of 2013, my sophomore year. I decided to
                        study abroad in Korea because I has visited China and Japan prior, and thought it was time for
                        me to visit the last "big" Asian nation. I was also pretty obsessed with K-pop at the time.
                    </p>
                    <p className="para">
                        Whilst I was there I studied Korean language, culture, and nightlife. I visited several UNESCO
                        sites, made friends with expats, travelled to Taipei and Tokyo, saw SNSD, T-Ara, and 9 Muses live,
                        and made life-lasting friends
                        across the globe.
                    </p>
                </div>
            </div>
        );
    }
});

module.exports = Education;

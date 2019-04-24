
let YYYY,YY,MMMM,MMM,MM,M,DDDD,DDD,DD,D,hhhh,hhh,hh,h,mm,m,ss,s,ampm,AMPM,dMod,th;

/**
 * Main class
 *
 * @param formatString
 * @param targetDate
 * @constructor
 */
function DateCustomFormat( formatString, targetDate )
{
    this.currentFormat = formatString;
    this.targetDate = (typeof targetDate === 'undefined' ? new Date() : targetDate );
}

/**
 * This function convert date to specific format
 *
 * @returns {string}
 */
DateCustomFormat.prototype.convert = function ()
{
    YYYY = this.targetDate.getFullYear();

    YY = ( YYYY + "" ).slice(-2);

    M = this.targetDate.getMonth() + 1;

    MM = M < 10 ? ( '0' + M ) : M;

    MMMM =
    [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ][M-1];

    MMM = MMMM.substring( 0, 3 );

    D = this.targetDate.getDate();

    DD = D < 10 ? ( '0' + D ) : D;

    DDD =
    [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ][this.targetDate.getDay()];

    DDD = DDD.substring( 0, 3 );

    th = ( D >= 10 && D <= 20 ) ? 'th' : ( ( dMod = D % 10 ) === 1 ) ? 'st' : ( dMod === 2 ) ? 'nd' : ( dMod === 3 ) ? 'rd' : 'th';

    this.currentFormat =
        this.currentFormat
            .replace( "#YYYY#", YYYY )
            .replace( "#YY#", YY )
            .replace( "#MMMM#", MMMM )
            .replace( "#MMM#", MMM )
            .replace( "#MM#", MM )
            .replace( "#M#", M )
            .replace( "#DDDD#", DDDD )
            .replace( "#DDD#", DDD )
            .replace( "#DD#", DD )
            .replace( "#D#", D )
            .replace( "#th#", th );

    h = hhh = this.targetDate.getHours();

    if( h === 0 ) h = 24;

    if( h > 12 ) h -= 12;

    hh = h < 10 ? ( '0' + h ) : h;

    hhhh = h < 10 ? ( '0' + hhh ) : hhh;

    ampm = hhh < 12 ? 'am' : 'pm';

    AMPM = ampm.toUpperCase();

    m = this.targetDate.getMinutes();

    mm = m < 10 ? ( '0' + m ) : m;

    s = this.targetDate.getSeconds();

    ss = s < 10 ? ( '0' + s ) : s;

    return this.currentFormat
        .replace( "#hhhh#", hhhh )
        .replace( "#hhh#", hhh )
        .replace( "#hh#", hh )
        .replace( "#h#", h )
        .replace( "#mm#", mm )
        .replace( "#m#", m )
        .replace( "#ss#", ss )
        .replace( "#s#", s )
        .replace( "#ampm#", ampm )
        .replace( "#AMPM#", AMPM );
};

module.exports = DateCustomFormat;
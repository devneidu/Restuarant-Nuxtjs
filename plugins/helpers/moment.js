import Vue from 'vue'
import * as moment from 'moment'

export default ({app}, inject) => {
    app.moment = moment
    inject('moment', moment)
}
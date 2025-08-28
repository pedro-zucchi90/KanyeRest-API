import mongoose from 'mongoose';

const Quote = mongoose.model('quote', {
    quote: String
})

export default Quote;

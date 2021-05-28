const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
    {
        email: { type: String, unique: true },
        password: String,
        name: String,
        date: { type: Date, default: Date.now },
        picture: {
            type: String,
            default:
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCABQAFADASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAMEBQECBv/EACMQAAICAQMEAwEAAAAAAAAAAAABAgMRBAUhEjFCYSJRcZH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+xAAAA42kst4SA6CjbuMIvFcOr23gVbjCTxZDp9p5AvA4mmsp5TOgAAAAAApblY41RgvJ8l0p7lU51Rmuejv+AZgAA0ttscqpQfi+C6U9tqcKpTfHX2/C4AAAAAADgbSWW8IrWa+mHCbm/QHm3b65vMG4el2FW31weZtz9PsRS3KXjWl+sR3KXlWn+MDQOlWvX0z4bcH7LKaaynlAdAAAAAY+r1ErrGs4gnwiA0Nbo3Ju2pZflEzwAAAE+k1EqbEs5g3yiA0NFo3Fq21YfjEC+AAAAAEF2lqu5lHEvtdycAZ8tt5+Nv9QjtvPyt/iNAAQU6WqnmMcy+33JwAAAA//9k=",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", User);

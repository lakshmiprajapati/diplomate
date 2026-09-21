const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        },

        role: {
            type: String,
            required: true,
            enum: ["student", "admin"]
        },

        branch: {
            type: String,
            required: function () {
                return this.role === "student";
            },
            enum: ["CSE / IT", "Electronics"]
        },

        year: {
            type: String,
            required: function () {
                return this.role === "student";
            },
            enum: ["1st Year", "2nd Year", "3rd Year"]
        },

        goal: {
            type: String,
            required: function () {
                return this.role === "student";
            },
            enum: [
                "B.Tech Lateral Entry",
                "Private Job",
                "Government Job",
                "Freelancing",
                "Not Sure Yet"
            ]
        },

        onboardingCompleted: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true
    }
);

// Hash password before saving
userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", userSchema);
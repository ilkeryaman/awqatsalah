import bcrypt from 'bcrypt';

const hash = async (value) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(value, salt);
    return hash;
}

const check = async (decryptedValue, encryptedValue) => {
    return await bcrypt.compare(decryptedValue, encryptedValue);
}

export default {
    hash,
    check
}
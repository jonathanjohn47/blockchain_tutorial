//Hash Generator
function generateHash(data) {
    return `${data} *`;
}

//Block
class Block {
    constructor({ data, hash, lastHash }) {
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
    }
}

//Chain of Blocks
class BlockChain {
    constructor() {
        const genBlock = new Block({ data: "genData", hash: "genHash", lastHash: "genLastHash" })
        this.chain = [genBlock];
    }

    addBlock(data) {
        const lastHash = this.chain[this.chain.length - 1].hash
        const hash = generateHash(`${data} ${lastHash}`)
        const block = new Block({ data: data, hash: hash, lastHash: lastHash })

        this.chain.push(block)
    }
}

//Executing everything
var dummyBlockChain = new BlockChain()
dummyBlockChain.addBlock("One")
dummyBlockChain.addBlock("Two")
dummyBlockChain.addBlock("Three")

console.log(dummyBlockChain);
import {isArray} from 'lodash';
import {BlockService} from "../app/Modules/Blocks/BlockService";

const blockService = new BlockService();
it("should return last blocks by time", async () => {
    const blocks = await blockService.getBlocksByTime();
    expect(isArray(blocks));
    expect(blocks[0]).toEqual(
        expect.objectContaining({
            hash: expect.any(String),
            time: expect.any(Number),
            height: expect.any(Number)
        }));
});



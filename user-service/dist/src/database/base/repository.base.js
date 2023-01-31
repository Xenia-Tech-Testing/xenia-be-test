"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(repository) {
        this.repository = repository;
    }
    create(data) {
        return this.repository.create(data);
    }
    save(data) {
        return this.repository.save(data);
    }
    saveMultiple(data) {
        return this.repository.save(data);
    }
    findOne(options) {
        return this.repository.findOne(options);
    }
    findAll(options) {
        return this.repository.find(options);
    }
    async findPaginate(paginationParams = {}, options) {
        const page = paginationParams.page > 0 ? paginationParams.page : 1;
        const pageSize = paginationParams.pageSize > 0 ? paginationParams.pageSize : 20;
        const findOptions = Object.assign({ take: pageSize, skip: (page - 1) * pageSize }, options);
        if (paginationParams.sortBy) {
            findOptions.order = {
                [paginationParams.sortBy]: paginationParams.sortOrder == 'desc' ? 'DESC' : 'ASC',
            };
        }
        const [items, totalItem] = await this.repository.findAndCount(findOptions);
        const totalPage = totalItem ? Math.ceil(totalItem / pageSize) : 1;
        return {
            data: items,
            page: page,
            pageSize: pageSize,
            totalPage: totalPage,
            totalItem: totalItem,
        };
    }
    update(criteria, data) {
        return this.repository.update(criteria, data);
    }
    delete(criteria) {
        return this.repository.delete(criteria);
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=repository.base.js.map
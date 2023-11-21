function permissions(Read = false, Write = false, overWrite = false, Delete = false) {
    this.Read = Read
    this.Write = Write
    this.overWrite = overWrite
    this.Delete = Delete
}

function user(name, type) {
    this.name = name
    if (type === "Admin") this.roles = new permissions(true, true, true, true)
    else if (type === "Editor") this.roles = new permissions(true, true, true, false)
    else if (type === "Teacher") this.roles = new permissions(true, true, false, false)
    else if (type === "Student") this.roles = new permissions(true, true, false, false)
    else this.roles = new permissions(true, false, false, false)
}

function getPermissions(adminList, username) {
    const foundAdmin = adminList.find(admin => admin.name === username)
    if (foundAdmin) {
        const { name, roles: { Read, Write, overWrite, Delete } } = foundAdmin
        return {
            Read: Read,
            Write: Write,
            overWrite: overWrite,
            Delete: Delete
        }
    }
    else { return new permissions(true, false, false, false) }
}
export { user, getPermissions }
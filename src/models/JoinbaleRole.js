'use strict';

/**
 * Add a joinable role
 */
class JoinableRole {
  constructor(guild, id) {
    this.id = id;
    this.guild = guild;
    this.leaveable = true;
  }

  get requiredRole() {
    if (this.guild && this.guild.roles.has(this.id) && this.guild.roles.has(this.requiredRole)) {
      return this.requiredRole;
    }
    return undefined;
  }

  set requiredRole(roleId) {
    if (this.guild && this.guild.roles.has(this.id) && this.guild.roles.has(roleId)) {
      this.requiredRole = roleId;
    }
  }

  get leavable() {
    return this.leaveable;
  }

  set leaveable(isLeavable) {
    this.leavable = isLeavable;
  }

  get role() {
    return {
      id: this.id, requiredRole: this.requiredRole, leaveable: this.isLeavable,
    };
  }
}

module.exports = JoinableRole;

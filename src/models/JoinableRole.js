'use strict';

/**
 * Add a joinable role
 */
class JoinableRole {
  constructor(guildRole) {
    this.id = guildRole.id;
    this.guild = guildRole.guild;
    this.isLeaveable = true;
    this.guildRole = guildRole;
  }

  get requiredRole() {
    if (this.guild && this.guild.roles.has(this.id) && this.guild.roles.has(this.requiredRole)) {
      return this.requiredRoleId;
    }
    return undefined;
  }

  set requiredRole(role) {
    if (this.guild && this.guild.roles.has(role.id) && this.guild.roles.has(this.id)) {
      this.requiredRoleId = role.id;
    }
  }

  get isLeaveable() {
    return this.leaveable;
  }

  set isLeaveable(isLeavable) {
    if (typeof isLeavable !== 'undefined') {
      this.leavable = isLeavable;
    }
  }

  getSimple() {
    return {
      id: this.id,
      requiredRole: this.requiredRoleId,
      leaveable: this.leaveable,
    };
  }
}

module.exports = JoinableRole;

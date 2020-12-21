module.exports = {
  docs:[
    {
      type: 'category',
      label: 'Internal.VirtNet',
      items: ['internal-virtnet-overview','centos8-hypervisor','documentation-server','foreman','dns-dhcp','ldap1-ldap2','pfsense-router'],
    },
    {
      type: 'category',
      label: 'How-To\'s',
      items: [
        'creating-new-network',
        'pfsense-as-vm',
        'base-vm-server-setup',
        'setting-up-bind',
        'maintaining-dns',
        'setting-up-dhcp',
        {
          type: 'category',
          label: 'Foreman',
          items: [
            'installing-foreman-with-katello',
            'configuring-foreman-terminal',
            'tftp-with-foreman',
            'creating-foreman-hosts'
          ],
        },
        'provisioning-ldap',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: ['nixadmin-guide','linux-admin-roadmap','devops-guide'],
    },
  ],
};
